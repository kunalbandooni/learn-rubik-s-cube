import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router){}

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

  user: string = "";
  pass: string = "";
  onLogin(){
    //const isUserExist = this.signUpUsers.find(m => m.username == this.loginObj.username && m.password == this.loginObj.password);
    //if(isUserExist != undefined)
    
    let count = true;
    if(this.user == "admin" && this.pass == "admin"){
      count = false;
      this.router.navigate(['/Home']);
    }
    if(count == true)
      alert("NOT A VALID USER");
  }
}
