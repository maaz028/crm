import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css'],
})
export class AdminLoginComponent implements OnInit {
  login = new FormGroup({
    userName: new FormControl(),
    password: new FormControl(),
  });

  constructor(private router : Router) {}

  ngOnInit(): void {}
  Submit() {
    if (this.login.value.userName == "admin" && this.login.value.password == '123') {
      this.router.navigate(['/admin'])
      
    }
    else {
      this.router.navigate(['/error-404']);
    }
    console.log("dfdf")
  }
}
