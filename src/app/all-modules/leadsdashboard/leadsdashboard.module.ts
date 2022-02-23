import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeadsdashboardRoutingModule } from './leadsdashboard-routing.module';
import { LeadsdashboardComponent } from './leadsdashboard.component';


@NgModule({
  declarations: [LeadsdashboardComponent],
  imports: [
    CommonModule,
    LeadsdashboardRoutingModule
  ]
})
export class LeadsdashboardModule { }
