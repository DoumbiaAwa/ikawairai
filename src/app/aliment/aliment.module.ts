import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlimentPageRoutingModule } from './aliment-routing.module';

import { AlimentPage } from './aliment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlimentPageRoutingModule
  ],
  declarations: [AlimentPage]
})
export class AlimentPageModule {}
