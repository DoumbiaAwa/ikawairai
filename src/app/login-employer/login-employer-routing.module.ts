import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginEmployerPage } from './login-employer.page';

const routes: Routes = [
  {
    path: '',
    component: LoginEmployerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginEmployerPageRoutingModule {}
