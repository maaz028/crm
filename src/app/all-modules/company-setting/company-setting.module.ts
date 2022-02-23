import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllModulesModule } from '../all-modules.module';
import { CompanySettingRoutingModule } from './company-setting-routing.module';
import { CompanySettingComponent } from './company-setting.component';


@NgModule({
  declarations: [CompanySettingComponent],
  imports: [
    CommonModule,
    CompanySettingRoutingModule,
    AllModulesModule
  ]
})
export class CompanySettingModule { }
