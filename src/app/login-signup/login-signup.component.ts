import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.scss'
})
export class LoginSignupComponent {
 

  activeForm : 'login' | 'register' = 'register';
  registerObj:registerModel=new registerModel();
  loginObj:loginModel=new loginModel();

constructor(private _router:Router){}

  toggleForm(form: 'login'| 'register')
  {
    this.activeForm = form;
  }
  registerForm()
  {
    
     const localusers = localStorage.getItem('users');
     if(localusers !=null)
     {
      const users = JSON.parse(localusers);
      users.push(this.registerObj);
      localStorage.setItem('users',JSON.stringify(users));
     }else{
      const users =[];
      users.push(this.registerObj);
      localStorage.setItem('users',JSON.stringify(users))
     }
  }

  loginForm()
  {
    
    const localusers = localStorage.getItem('users');
    if(localusers != null){
      const users = JSON.parse(localusers);
      const isUserExist = users.find((user:registerModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password)
      if(isUserExist !=undefined)
      {
        this._router.navigateByUrl('/dashboard');
      }else{
      
      }
    } 
  }
}


  export class registerModel{
    name:string;
    email:string;
    password:string;
    constructor(){
      this.name ="";
      this.email="";
      this.password="";
    }
}
export class loginModel{

  email:string;
  password:string;
  constructor()
  {
    this.email="";
    this.password="";
  }

}