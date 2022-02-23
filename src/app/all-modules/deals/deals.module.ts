import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { DealsRoutingModule } from './deals-routing.module';
import { DealsComponent } from './deals.component';


@NgModule({
  declarations: [DealsComponent],
  imports: [
    CommonModule,
    DealsRoutingModule,
    DataTablesModule
  ]
})
export class DealsModule { }
