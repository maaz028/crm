import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpportunitesComponent } from './opportunites.component';

const routes: Routes = [{ path: '', component: OpportunitesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpportunitesRoutingModule { }
