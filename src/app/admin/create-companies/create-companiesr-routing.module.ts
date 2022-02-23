import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCompaniesrComponent } from './create-companiesr.component';

const routes: Routes = [{ path: '', component: CreateCompaniesrComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateCompaniesrRoutingModule { }
