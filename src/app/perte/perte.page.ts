import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoryService } from '../service/category.service';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { map, switchMap } from 'rxjs/operators';
import { Perte } from '../model/perte';
import { PerteService } from '../service/perte.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perte',
  templateUrl: './perte.page.html',
  styleUrls: ['./perte.page.scss'],
})
export class PertePage implements OnInit {
  perteform!: FormGroup;
  selectedCategory: Category | undefined;
  categories$: Observable<Category[]> = new Observable<Category[]>();
  race: string = '';
  successMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private categoryService: CategoryService,
    private perteService: PerteService,
    private router: Router
  ) {}

  initializeForm(): void {
    this.perteform = this.fb.group({
      categorie: ['', Validators.required],
      race: ['', Validators.required],
      nombre: ['', Validators.required],
      cause: ['', Validators.required],
      photo: ['', Validators.required],
    });
  }

  ngOnInit() {
    this.initializeForm();
    this.categories$ = this.categoryService.getCategory().pipe(
      map((result) => result.categories)
    );

    this.selectedCategory = undefined;
    this.updateSelectedCategory();
  }

  updateSelectedCategory() {
    const categorieControl = this.perteform.get('categorie');
    const raceControl = this.perteform.get('race');
    if (categorieControl && raceControl) {
      categorieControl.valueChanges
        .pipe(switchMap((categoryId) => this.categoryService.getCategoryById(categoryId)))
        .subscribe((category) => {
          if (category) {
            this.selectedCategory = category;
            if (category.races && category.races.length > 0) {
              raceControl.setValue(category.races[0]); // Set the first race of the category
            } else {
              raceControl.setValue(null); // No races available, reset the value
            }
          }
        });
    }
  }

  ajout(): void {
    const animalData = this.perteform.value;
    animalData.categorie = this.selectedCategory?.nom;
    animalData.race = this.perteform.get('race')?.value?.race;
    this.perteService.addPerte(animalData).then(() => {
      // Reset the form
      this.perteform.reset();
      // Show success message
      this.successMessage = 'Perte envoyer!';
      // Navigate to the home page after 2 seconds (adjust as needed)
      setTimeout(() => {
        this.router.navigate(['/accueil-employer']);
      }, 2000);
    });
  }
}
