import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vente',
  templateUrl: './vente.page.html',
  styleUrls: ['./vente.page.scss'],
})
export class VentePage implements OnInit {

  public alertButtons = ['OK'];
  public alertInputs = [
   
    {
      type: 'Quantité',
      placeholder: 'Quantité',
      min: 1,
      max: 100,
    },
    {
      type: 'Prix',
      placeholder: 'Prix',
      min: 1,
      max: 100,
    },
    
  ];
  

  constructor() { }

  ngOnInit() {
    
  }

}
