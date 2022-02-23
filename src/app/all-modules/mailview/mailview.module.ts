import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailviewRoutingModule } from './mailview-routing.module';
import { MailviewComponent } from './mailview.component';


@NgModule({
  declarations: [MailviewComponent],
  imports: [
    CommonModule,
    MailviewRoutingModule
  ]
})
export class MailviewModule { }
