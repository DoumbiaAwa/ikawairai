import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AccueilAwaPageRoutingModule } from './accueil-awa-routing.module';

import { AccueilAwaPage } from './accueil-awa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AccueilAwaPageRoutingModule
  ],
  declarations: [AccueilAwaPage]
})
export class AccueilAwaPageModule {}
