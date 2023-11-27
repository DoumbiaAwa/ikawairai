import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil-client',
  templateUrl: './accueil-client.page.html',
  styleUrls: ['./accueil-client.page.scss'],
})
export class AccueilClientPage implements OnInit {
  
  slideOpts = {
    effect: 'cube', // Choisissez l'effet que vous voulez
    speed: 1000, // Définissez la vitesse de transition en millisecondes
    loop: true, // Activez la boucle des diapositives
    autoplay: true, // Activez la lecture automatique des diapositives
  };

  constructor() { }

  ngOnInit() {
  }

}
