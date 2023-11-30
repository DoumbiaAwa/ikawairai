import { Component, OnInit, AfterViewInit } from '@angular/core';
import { VenteService } from '../service/vente.service';

@Component({
  selector: 'app-accueil-client',
  templateUrl: './accueil-client.page.html',
  styleUrls: ['./accueil-client.page.scss'],
})
export class AccueilClientPage implements OnInit, AfterViewInit {
  ventes: any[] = [];
  constructor(private venteService: VenteService) {}

  translateValue = 0;
  slideWidth = 0;
  currentIndex = 0;

  ngOnInit() {
    // Défilement automatique toutes les 2 secondes (ajustez selon vos besoins)
    setInterval(() => this.nextSlide(), 2000);
    this.getVente();
  
  }

  getVente(): void {
    this.venteService.getVente().subscribe((response) => {
      this.ventes = response.ventes;
    });
  }


  ngAfterViewInit() {
    this.slideWidth = document.querySelector('.image')?.clientWidth || 0;
  }

  nextSlide() {
    const imageSlider = document.getElementById('image-slider') as HTMLDivElement;

    if (this.currentIndex < imageSlider.children.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }

    this.translateValue = -this.slideWidth * this.currentIndex;
    imageSlider.style.transition = 'transform 0.5s ease-in-out';
    imageSlider.style.transform = `translateX(${this.translateValue}px)`;
  }
}
