import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PertePageRoutingModule } from './perte-routing.module';

import { PertePage } from './perte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PertePageRoutingModule
  ],
  declarations: [PertePage]
})
export class PertePageModule {}
