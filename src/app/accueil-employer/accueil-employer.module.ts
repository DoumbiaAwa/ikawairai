import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilEmployerPageRoutingModule } from './accueil-employer-routing.module';

import { AccueilEmployerPage } from './accueil-employer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilEmployerPageRoutingModule
  ],
  declarations: [AccueilEmployerPage]
})
export class AccueilEmployerPageModule {}
