import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefauldCategoriePage } from './defauld-categorie.page';

const routes: Routes = [
  {
    path: '',
    component: DefauldCategoriePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefauldCategoriePageRoutingModule {}
