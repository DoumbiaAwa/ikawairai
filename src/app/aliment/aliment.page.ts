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

  public showAlert = false;

  constructor(private alertController: AlertController) {}

  ngOnInit() {}

  async presentAlert(type: string) {
    const alert = await this.alertController.create({
      header: 'Type de Nourriture',
      buttons: this.alertButtons,
      inputs: this.alertInputs.map((input) => {
        return {
          ...input,
          checked: input.label === type,
        } as any; // Use 'as any' to bypass the type checking for 'type'
      }),
    });

    await alert.present();
    this.showAlert = true;
  }

  handleAlertDismiss() {
    this.showAlert = false;
  }
}
