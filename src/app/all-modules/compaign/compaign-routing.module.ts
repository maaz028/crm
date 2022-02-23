import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompaignComponent } from './compaign.component';

const routes: Routes = [{ path: '', component: CompaignComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompaignRoutingModule { }
