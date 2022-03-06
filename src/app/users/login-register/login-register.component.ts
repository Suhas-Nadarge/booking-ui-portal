import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
    public toastr:ToastrService,
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
      confirm_password:['',Validators.required],
      isDoctor: '',
      id: ''
    })
    
  }


  login(email:string,password:string){
    this.showLoginError = false;
    let requestObj = {email:email,password:password}

    // this.loginService.loginUser(requestObj).subscribe((data:any) => {
    //   if(data['status'] === 'success'){
    //     localStorage.setItem('username',requestObj.username)
    //     this.router.navigate(['/home'])
    //   this.toastr.success('Logged in successfully!', 'Success');
    //   } else {
    //     this.showLoginError = true;
    //     this.toastr.error('Please enter valid credentials.')
    //   }
    //   console.log(data);
    // },
    // (err: any)=>{
    //   this.toastr.error(err['error']['message'] ? err['error']['message'] : 'Please enter valid credentials!', 'Error');
    // });
    this.router.navigate(['/pages/appointments/search'])
}


registerUser(): any{
  {
    this.showLoginError = false;
    let requestObj = this.loginForm?.value;

    this.loginService.registerUser(requestObj).subscribe((data:any) => {
      if(data['status'] === 'success'){
      this.toastr.success('User Registered successfully, check your mail for the confirmation!', 'Success');
      this.loginForm.reset();
      this.router.navigate(['/login'])
      
    } else {
        this.showLoginError = true;
      }
      console.log(data);
    },
    (err: any)=>{
      this.toastr.error(err['error']['message'] ? err['error']['message'] : 'Something went wrong!', 'Error');
    console.log(err['error']['message'])
    });

}

}
}
