import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MsalModule, MSAL_INSTANCE, MsalService } from '@azure/msal-angular';
import { HttpClientModule } from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatIconModule } from '@angular/material/icon';


import {
  IPublicClientApplication,
  PublicClientApplication,
} from '@azure/msal-browser';
import { HashLocationStrategy } from '@angular/common';
import { AppointmentComponent } from './Activity/appointment/appointment.component';
import { EmailComponent } from './Activity/email/email.component';
import { PostComponent } from './Activity/post/post.component';
import { NoteComponent } from './Activity/note/note.component';
import { TaskComponent } from './Activity/task/task.component';
import { PhoneCallComponent } from './Activity/phone-call/phone-call.component';


export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'df9dae59-8f56-4c0a-91c8-f367cf29101f',
      redirectUri: 'https://innovativev.com.pk',
    },
  });
}

const isIE =
  window.navigator.userAgent.indexOf('MSIE ') > -1 ||
  window.navigator.userAgent.indexOf('Trident/') > -1;

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    Error500Component,
    LoginComponent,
    RegisterComponent,
    AdminLoginComponent,
    AppointmentComponent,
    EmailComponent,
    PostComponent,
    NoteComponent,
    TaskComponent,
    PhoneCallComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,


    AppRoutingModule,
    PerfectScrollbarModule,
    DataTablesModule,
    BrowserAnimationsModule,
    MsalModule,
    AngularEditorModule,
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useClass: HashLocationStrategy,
      useFactory: MSALInstanceFactory,
    },
    MsalService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
