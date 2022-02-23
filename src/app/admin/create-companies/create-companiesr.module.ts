import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCompaniesrRoutingModule } from './create-companiesr-routing.module';
import { CreateCompaniesrComponent } from './create-companiesr.component';


@NgModule({
  declarations: [CreateCompaniesrComponent],
  imports: [
    CommonModule,
    CreateCompaniesrRoutingModule
  ]
})
export class CreateCompaniesrModule { }
