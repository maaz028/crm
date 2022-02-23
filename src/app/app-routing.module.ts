import { PhoneCallComponent } from './Activity/phone-call/phone-call.component';
import { AppointmentComponent } from './Activity/appointment/appointment.component';
import { TaskComponent } from './Activity/task/task.component';
import { NoteComponent } from './Activity/note/note.component';
import { PostComponent } from './Activity/post/post.component';
import { EmailComponent } from './Activity/email/email.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ActivateGuard } from './activate.guard';


const routes: Routes = [
  {
    path:'',redirectTo:'login',pathMatch:'full'

  },
  {
    path: 'user',
    loadChildren: () =>
      import(`./all-modules/all-modules.module`).then(
        (m) => m.AllModulesModule
      ), canActivate:[ActivateGuard],
  },
  { path: 'adminlogin', component: AdminLoginComponent },
  { path: 'error-404', component: Error404Component },
  { path: 'error-500', component: Error500Component },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'Activity_email', component: EmailComponent },
  { path: 'post', component: PostComponent },
  { path: 'note', component: NoteComponent },
  { path: 'task', component: TaskComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path:'phoneCall' , component: PhoneCallComponent},
  {
    path: 'admin',

    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: 'opportunities',
    loadChildren: () =>
      import('./all-modules/opportunites/opportunites.module').then(
        (m) => m.OpportunitesModule
      ),
  },

  {
    path: 'company-setting',
    loadChildren: () =>
      import('./all-modules/company-setting/company-setting.module').then(
        (m) => m.CompanySettingModule
      ),
  },
  { path: 'compaign', loadChildren: () => import('./all-modules/compaign/compaign.module').then(m => m.CompaignModule) },


];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
