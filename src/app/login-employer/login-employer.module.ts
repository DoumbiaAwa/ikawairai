import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginEmployerPageRoutingModule } from './login-employer-routing.module';

import { LoginEmployerPage } from './login-employer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginEmployerPageRoutingModule
  ],
  declarations: [LoginEmployerPage]
})
export class LoginEmployerPageModule {}
