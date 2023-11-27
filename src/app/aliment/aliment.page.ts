import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-aliment',
  templateUrl: './aliment.page.html',
  styleUrls: ['./aliment.page.scss'],
})
export class AlimentPage implements OnInit {
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      name: 'Maïs',
      type: 'radio',
      label: 'Maïs',
      value: 'red',
    },
    {
      name: 'Riz',
      type: 'radio',
      label: 'Riz',
      value: 'blue',
    },
    {
      name: 'Manioc',
      type: 'radio',
      label: 'Manioc',
      value: 'green',
    },
  ];


  constructor() {}

  ngOnInit() {}

  buttonColor: string = 'valider-button';

  onValiderClick() {
    // Handle the button click logic...
    this.buttonColor = 'valider-button clicked';
  }


}
