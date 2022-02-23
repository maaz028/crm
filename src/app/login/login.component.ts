import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';

import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { filter, takeUntil } from 'rxjs/operators';
import {
  EventMessage,
  EventType,
  InteractionStatus,
} from '@azure/msal-browser';
import { Subject } from 'rxjs';
import { LoginService } from '../Auth/login.service';
import { CrmApiService } from '../crm-api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @ViewChild('loginBtn') loginBtn!:ElementRef<any>
  @ViewChild('spinner') spinner!:ElementRef<any>

  title = 'msal-angular-tutorial';
  isIframe = false;
  loginDisplay = false;
  broadcastService: any;
  private readonly _destroying$ = new Subject<void>();

  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService,

    private _ob:CrmApiService, private formBuilder:FormBuilder,
    private router: Router
  ) {}


  login2 : FormGroup


  //constructor(private _loginService: LoginService) { }

  username: any;

  getUserLogin:any;
  ngAfterViewInit():void{
    this.spinner.nativeElement.style.display='none'
  }
  ngOnInit() {

    if(sessionStorage.getItem('is_login')!=null)
    {
      this.router.navigate(['/user'])
    }

    
    this.login2= this.formBuilder.group({
      userName:['',{
       validators:[Validators.required]
     }],
     password:['',{
      validators:[Validators.required]
    }]


    })
    this.username = sessionStorage.getItem('_username');

  
  }

  login() {
    this.authService.loginRedirect();

    console.log('hhhhh');
  }

  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }

  showSpinner(val1,val2)
  {
    this.loginBtn.nativeElement.style.display = val1
    this.spinner.nativeElement.style.display = val2
  }
  LoginCheck(values:any) {
    // {
    //   sessionStorage.setItem('_username', this.login.value.userName);
    //   this.t = this._obj.getUserLogin()
    this.showSpinner('none','')
     console.log(values.value.userName)
     this._ob.getUserLogin(values.value.userName , values.value.password).subscribe((data:any)=>{


       if(data!=null)
       {
         let userid=data['Table'][0]['UserID']

         sessionStorage.setItem('_username',userid)

          sessionStorage.setItem('is_login','true')

         console.log("Corect")
        
         this.router.navigate(['/user/dashboard'])
         this.showSpinner('','none')
       }
       else{
        this.showSpinner('','none')
        Swal.fire('Username or Password is incorrect !','','error')
       }
     })
      //     // this.li = data
      //     // this.lis= this.li.lis
      //     // console.log(this.lis)

      //     this.getUserLogin = data
      //     this.li= await this.getUserLogin.json()
      //     console.log(this.li)
      //    // sessionStorage.setItem('UserID', this.getUserLogin.UserID)

      //     console.log('..........',this.getUserLogin)
      //     // let body = JSON.parse(JSON.stringify(this.getUserLogin)).body;
      //     // console.log(body)

      //   })



  //     if(this.login.value.userName==this.getUserLogin.pUserID && this.login.value.password==this.getUserLogin.pPassword)
  //     {
  //       this.router.navigate(['./user']);
  //     }
  //   //  this.valid = this.validuser(this.login.value);

  // console.log()

    }

}
