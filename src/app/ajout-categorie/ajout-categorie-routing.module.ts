import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AjoutCategoriePage } from './ajout-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutCategoriePageRoutingModule {}
