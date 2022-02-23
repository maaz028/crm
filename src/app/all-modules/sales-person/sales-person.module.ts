import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesPersonRoutingModule } from './sales-person-routing.module';
import { SalesPersonComponent } from './sales-person.component';
import { AllModulesModule } from '../all-modules.module';

@NgModule({
  declarations: [SalesPersonComponent],
  imports: [
    CommonModule,
    SalesPersonRoutingModule,
    AllModulesModule
  ]
})
export class SalesPersonModule { }
