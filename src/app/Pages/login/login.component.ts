import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationRequest } from 'src/app/Model/authentication-request';
import { AuthentificationService } from 'src/app/Service/Authentification/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  authenticationRequest :AuthenticationRequest=new AuthenticationRequest();
  errorMsg : string=""
    constructor(private authService : AuthentificationService, private router: Router) { }
  
    ngOnInit(): void {
      localStorage.removeItem("accesstoken")
    }
    login(){
      this.authService.login(this.authenticationRequest).subscribe(
        ress =>{
          this.authService.setUserToken(ress)
          this.router.navigate(["/home"])
  
        },error =>{
          this.errorMsg= "login ou mot de pass incorect"
        }
      )
  
    }
  
  

}
