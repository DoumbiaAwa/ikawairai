import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PertePageRoutingModule } from './perte-routing.module';

import { PertePage } from './perte.page';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PertePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PertePage]
})
export class PertePageModule {}
