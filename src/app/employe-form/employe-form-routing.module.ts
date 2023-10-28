import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeFormPage } from './employe-form.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeFormPageRoutingModule {}
