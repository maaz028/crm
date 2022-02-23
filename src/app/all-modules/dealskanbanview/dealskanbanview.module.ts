import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DealskanbanviewRoutingModule } from './dealskanbanview-routing.module';
import { DealskanbanviewComponent } from './dealskanbanview.component';


@NgModule({
  declarations: [DealskanbanviewComponent],
  imports: [
    CommonModule,
    DealskanbanviewRoutingModule
  ]
})
export class DealskanbanviewModule { }
