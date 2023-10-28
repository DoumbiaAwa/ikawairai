import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeFormPageRoutingModule } from './employe-form-routing.module';

import { EmployeFormPage } from './employe-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeFormPageRoutingModule
  ],
  declarations: [EmployeFormPage]
})
export class EmployeFormPageModule {}
