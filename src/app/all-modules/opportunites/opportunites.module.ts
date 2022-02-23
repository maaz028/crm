import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpportunitesRoutingModule } from './opportunites-routing.module';
import { OpportunitesComponent } from './opportunites.component';


@NgModule({
  declarations: [OpportunitesComponent],
  imports: [
    CommonModule,
    OpportunitesRoutingModule
  ]
})
export class OpportunitesModule { }
