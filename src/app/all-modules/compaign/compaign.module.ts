import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompaignRoutingModule } from './compaign-routing.module';
import { CompaignComponent } from './compaign.component';


@NgModule({
  declarations: [CompaignComponent],
  imports: [
    CommonModule,
    CompaignRoutingModule
  ]
})
export class CompaignModule { }
