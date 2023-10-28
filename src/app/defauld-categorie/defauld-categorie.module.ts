import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefauldCategoriePageRoutingModule } from './defauld-categorie-routing.module';

import { DefauldCategoriePage } from './defauld-categorie.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefauldCategoriePageRoutingModule
  ],
  declarations: [DefauldCategoriePage]
})
export class DefauldCategoriePageModule {}
