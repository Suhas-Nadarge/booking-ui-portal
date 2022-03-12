import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  loginForm!: FormGroup
  showLoginError = false;
  isLogin = false;
  constructor(private fb:FormBuilder,public router:Router, 
    public toastr:ToastrManager,
    public loginService: LoginService,
    ) { }
  ngOnInit(): void {
    this.createForm();
  }


  createForm() {
    this.loginForm = this.fb.group({
      email:['',Validators.required],
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      password:['',Validators.required],
      // confirm_password:['',Validators.required],
      isDoctor: false,
      id: ''
    })
    
  }


  login(){
    this.showLoginError = false;
    let requestObj = this.loginForm.value;
console.log(requestObj)
    this.loginService.loginUser(requestObj).subscribe((data:any) => {
      if(data['status'] === 'success'){
        console.log(data)
        localStorage.setItem('isDoctor', data.isDoctor)
        localStorage.setItem('id', data.id)

        this.router.navigate(['/pages/appointments/search'])
      this.toastr.successToastr('Logged in successfully!', 'Success');
      } else {
        this.showLoginError = true;
        this.toastr.errorToastr('Please enter valid credentials.')
      }
      console.log(data);
    },
    (err: any)=>{
      this.toastr.errorToastr(err['error']['message'] ? err['error']['message'] : 'Please enter valid credentials!', 'Error');
    });
    // this.router.navigate(['/pages/appointments/search'])
}


registerUser(): any{
  {
    this.showLoginError = false;
    let requestObj = this.loginForm?.value;
    requestObj['isDoctor'] = JSON.parse(requestObj['isDoctor'])
    this.loginService.registerUser(requestObj).subscribe((data:any) => {
      if(data['status'] === 'success'){
      this.toastr.successToastr('User Registered successfully, check your mail for the confirmation!', 'Success');
      this.loginForm.reset();
      this.isLogin = true;
      // this.router.navigate(['/login'])
      
    } else {
        this.showLoginError = true;
      }
      console.log(data);
    },
    (err: any)=>{
      this.toastr.errorToastr(err['error']['message'] ? err['error']['message'] : 'Something went wrong!', 'Error');
    console.log(err['error']['message'])
    });

}

}
}
