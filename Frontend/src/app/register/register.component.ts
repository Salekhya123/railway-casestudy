import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { JwtClientService } from '../jwt-client.service';

import { FormControl, FormGroup, Validators} from '@angular/forms';

import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  authenticationRequest:any={
    "username":"",
    "password":""
    
   
  };

  surveyForm!: FormGroup;
  submitted= false;

  response:any;

//*this is for declaring toggle password 
  public showPassword: boolean = false;
 
 constructor(private service:JwtClientService,private  formBuilder: FormBuilder,private router:Router) { }


  ngOnInit(): void {
  }

  OnRegister()
  {
     this.service.subscribeClient(this.authenticationRequest)
     .subscribe((data:any)=>{
      console.log(data)
      this.router.navigate(['login'])

    });
  }
    public togglePasswordVisibility(): void {
      this.showPassword = !this.showPassword;
    }
 

}
