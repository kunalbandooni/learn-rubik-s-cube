import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  // check if login form is active or not
  loginActive = true;

  // check if registeration form is active or not
  registerationActive = false;
  
  // to activate login form
  displayLoginForm(){
    this.loginActive = true;
    this.registerationActive = false;
  }

  try(){
    alert("YES");
  }

  // to activate registeration form
  displayRegisterationForm(){
    this.loginActive = false;
    this.registerationActive = true;
  }

  // LOGIN
  signUpUsers: any[] = [
    {username: "admin", password: "admin"}
  ]; 

  signUpObj: any = {
    username: '', 
    password: ''
  };

  loginObj: any = {
    username: '', 
    password: ''
  };

  constructor(){}

  ngOnInit(): void{
    const localData = localStorage.getItem('signUpUsers');
    if(localData != null){
      this.signUpUsers = JSON.parse(localData);
    }
  }

  onSignUp(){
    this.signUpUsers.push(this.signUpObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signUpUsers));
    this.signUpObj = {
      username: '', 
      password: ''
    };
    alert("ADDED USER");
  }

  isUserExist: boolean = false;
  onLogin(){
    this.isUserExist = this.signUpUsers.find(m => m.username === this.loginObj.username && m.password === this.loginObj.password);
    if(this.isUserExist == true)
      alert("LOGIN SUCCESSFUL");
    else
      alert("NOT A VALID USER");
  }
}
