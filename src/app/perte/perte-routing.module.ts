import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PertePage } from './perte.page';

const routes: Routes = [
  {
    path: '',
    component: PertePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PertePageRoutingModule {}
