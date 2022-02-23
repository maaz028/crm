import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public is_login: any;
  constructor(private router: Router) {}
  ngOnInit() {}
  validuser() {
    // if (value.userName == 'admin' && value.password == '123') {
    //   sessionStorage.setItem('is_login', 'true');
    //   this.router.navigate(['/user']);
    // } else {
    //   console.log('wrong data');
    // }
    sessionStorage.setItem('is_login','true');
    
    
  }
}
