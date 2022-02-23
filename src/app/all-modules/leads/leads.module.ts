import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { LeadsRoutingModule } from './leads-routing.module';
import { LeadsComponent } from './leads.component';


@NgModule({
  declarations: [LeadsComponent],
  imports: [
    CommonModule,
    LeadsRoutingModule,
    DataTablesModule
  ]
})
export class LeadsModule { }
