import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { TablesdatatablesRoutingModule } from './tablesdatatables-routing.module';
import { TablesdatatablesComponent } from './tablesdatatables.component';

@NgModule({
  declarations: [TablesdatatablesComponent],
  imports: [
    CommonModule,
    TablesdatatablesRoutingModule,
    DataTablesModule,
  ]
})
export class TablesdatatablesModule { }
