import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesPersonComponent } from './sales-person.component';

const routes: Routes = [{ path: '', component: SalesPersonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesPersonRoutingModule { }
