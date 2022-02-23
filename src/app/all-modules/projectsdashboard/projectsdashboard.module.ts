import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsdashboardRoutingModule } from './projectsdashboard-routing.module';
import { ProjectsdashboardComponent } from './projectsdashboard.component';


@NgModule({
  declarations: [ProjectsdashboardComponent],
  imports: [
    CommonModule,
    ProjectsdashboardRoutingModule
  ]
})
export class ProjectsdashboardModule { }
