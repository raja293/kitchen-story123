import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { NgForm} from '@angular/forms';
import { Login } from './login';
import { LoginService } from './login.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  
  login=new Login();
  constructor(private route:Router, private logserv:LoginService){}
  
  ngonInit():void{}
  save(registerForm:NgForm){
    let uid=this.login.email;
    let pass=this.login.password;
    if(uid=="admin@teksystems.com")
    {
      if(pass=="Admin123")
      {
        this.logserv.loggedin();
        this.route.navigate(['/admin']);
        
      }
      else{
        alert("Admin password incorrect");
      }

    }
    else{
      this.logserv.loggedin();
      this.route.navigate(['/home']);

    }
    console.log(registerForm);
    console.log(JSON.stringify(registerForm.value));
  }

  
}
