import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CrmApiService } from '../crm-api.service';
import swal from 'sweetalert2';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@ViewChild('signupBtn') signupBtn!:ElementRef<any>
@ViewChild('spinner') spinner!:ElementRef<any>


  constructor(
     private formBuilder:FormBuilder,
    private router: Router,
    private http:HttpClient,
    private _obj:CrmApiService,
  ) { }

  Register:FormGroup
  

  ngOnInit(): void {
    this.Register= this.formBuilder.group({
      eMail:['',{
       validators:[Validators.required]
     }],
     uName:['',{
      validators:[Validators.required]
    }],
    Pass:['',{
      validators:[Validators.required]
    }],
    reP:['',{
      validators:[Validators.required]
    }]


    })
    
  }
  showSpinner(val1,val2)
  {
    this.signupBtn.nativeElement.style.display = val1
    this.spinner.nativeElement.style.display = val2
  }
  suCheck(val:any){
    console.log(val.value)
    console.log(this.spinner.nativeElement,' ',this.signupBtn.nativeElement)
    this.showSpinner('none','')
    if(val.value.Pass==val.value.reP)
    {

    let obj={
      'Password':val.value.Pass,
      'Email':val.value.eMail,
      'UserID':val.value.uName,
      'PhoneNo':'',
      'IsADUser':false,
      'CreatedBy':'web',


    }
    if(val.value!=null){
      this._obj.postSignUpData(obj).subscribe(data=>{
        console.log(data)
        this.showSpinner('','none')
        Swal.fire('Account Created !','','success')
        .then(()=>
        {

          this.router.navigate(['login'])
        })
      })
      // alert("You Signed Up Successfully....")
      // this.router.navigate(['./login'])
      
        
      
    }
  }
  else{
    this.showSpinner('','none')
    swal.fire('Password Does not Match !','','error')
  }
  }
  backToLogin()
  {
    this.router.navigate(['login'])
  }

}
