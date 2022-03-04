import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string="";
  userpassword:string="";
  formType:string="signUp";
  mySelection = "signUp";

  constructor(public router : Router) { }

  ngOnInit() {
  }

  AuthenticateUser(){
    if(this.username === "admin" && this.userpassword === "admin"){
        // redirect to dashboard !
        this.router.navigate(['']);
    }
  }

  RegisterUser(){
    if(this.username === "admin" && this.userpassword === "admin"){
      // redirect to dashboard !
      this.router.navigate(['']);
  }
  }

  onItemChange($event){
    console.log($event.target.value);
    this.formType = $event.target.value;
  }

}
