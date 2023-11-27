import { Component, OnInit } from '@angular/core';
import { TacheService } from '../service/tache.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Tache } from '../model/tache';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
@Component({
  selector: 'app-tache',
  templateUrl: './tache.page.html',
  styleUrls: ['./tache.page.scss'],
})
export class TachePage implements OnInit {
  taches: any[] = [];
  constructor(private tacheService:TacheService) { }

  ngOnInit(): void {
    this.getTaches()
    }
  
  
    getTaches(): void {
      this.tacheService.getTache().subscribe(response => {
            this.taches = response.taches;
           
          });
        }

}
