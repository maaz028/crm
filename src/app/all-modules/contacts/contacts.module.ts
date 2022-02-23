import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from "angular-datatables";
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { AllModulesModule } from '../all-modules.module';
import { ModalModule } from "ngx-bootstrap/modal";

@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    DataTablesModule,
    AllModulesModule,
    ModalModule.forRoot()
  ]
})
export class ContactsModule { }
