import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AllModulesRoutingModule } from './all-modules-routing.module';
import { AllModulesComponent } from './all-modules.component';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AllModulesData } from 'src/assets/all-modules-data/all-modules-data';
import { AllModulesService } from './all-modules.service';
import {MatDialogModule} from '@angular/material/dialog';
import { AngularEditorModule } from '@kolkov/angular-editor';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [AllModulesComponent, HeaderComponent, SidebarComponent],
 
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AllModulesRoutingModule,
    PerfectScrollbarModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(AllModulesData),
    MatDialogModule,
    AngularEditorModule
  ],
  exports:[
    FormsModule,
    MatDialogModule,
    ReactiveFormsModule,
    AngularEditorModule
  ],
  providers: [
    AllModulesService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class AllModulesModule {}
