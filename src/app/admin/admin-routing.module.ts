import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'dashboard',
        
        loadChildren: () => import('./admin-dashboard/admin-dashboard.module').then(
        (m)=>m.AdminDashboardModule)
      },
      {
        path: 'createUser',
        loadChildren: () =>
          import('./create-user/create-user.module').then(
            (m) => m.CreateUserModule
          ),
      },
      {
        path: 'createCompanies',
        loadChildren: () =>
          import('./create-companies/create-companiesr.module').then(
            (m) => m.CreateCompaniesrModule
          ),
      },
      {
        path: 'userSetting',
        loadChildren: () =>
          import('./user-setting/user-setting.module').then(
            (m) => m.UserSettingModule
          ),
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
