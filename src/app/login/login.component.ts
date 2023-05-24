import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  public loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private http:HttpClient, private router:Router){}
  
  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      
      email:[''],
      password:['']
      
    })
  }
  login(){
    this.http.post<any>("http://localhost:3000/signupUsers", 
      this.loginForm.value)
      .subscribe(
        (res) => {
          this.loginForm.get('email')!.value;
          const user = res.email;
          const pass = res.password;
          
          if(user == this.loginForm.get('email')!.value){
            alert("login Successful");
            this.loginForm.reset();
            this.router.navigate(['student']);
          } else {
            this.loginForm.get('email')!.value;
            alert("user not found!!");
          }
          
        },
        err => {
          alert("Something went wrong");
        }
      );
  }
  


}

