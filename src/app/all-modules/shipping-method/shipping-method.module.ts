import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllModulesModule } from '../all-modules.module';
import { ShippingMethodRoutingModule } from './shipping-method-routing.module';
import { ShippingMethodComponent } from './shipping-method.component';


@NgModule({
  declarations: [ShippingMethodComponent],
  imports: [
    CommonModule,
    ShippingMethodRoutingModule,
    AllModulesModule
  ]
})
export class ShippingMethodModule { }
