import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlimentPage } from './aliment.page';

const routes: Routes = [
  {
    path: '',
    component: AlimentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlimentPageRoutingModule {}
