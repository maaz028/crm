import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormhorizontalRoutingModule } from './formhorizontal-routing.module';
import { FormhorizontalComponent } from './formhorizontal.component';


@NgModule({
  declarations: [FormhorizontalComponent],
  imports: [
    CommonModule,
    FormhorizontalRoutingModule
  ]
})
export class FormhorizontalModule { }
