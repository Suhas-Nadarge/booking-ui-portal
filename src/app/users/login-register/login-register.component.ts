import { AppointmentService } from './../../services/appointment.service';
import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../services/login.service';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.scss']
})
export class LoginRegisterComponent implements OnInit {
  loginForm!: FormGroup
  showLoginError = false;
  isLogin = false;
  constructor(private fb:FormBuilder,public router:Router, public appService: AppointmentService,private spinnerService: NgxSpinnerService,
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
    this.spinnerService.show();
    this.showLoginError = false;
    let requestObj = this.loginForm.value;
console.log(requestObj)
    this.loginService.loginUser(requestObj).subscribe((data:any) => {
      if(data['status'] === 'success'){
        this.spinnerService.hide();
        console.log(data)
        localStorage.setItem('isDoctor', data.isDoctor)
        localStorage.setItem('id', data.id)
        localStorage.setItem('firstname', data.firstname)
        localStorage.setItem('lastname', data.lastname)
        this.appService.setUserData(true);
        // localStorage.setItem('fullname', )
        if(data.isDoctor){
          this.router.navigate(['/pages/appointments/view-appointments'])
        } else {
          this.router.navigate(['/pages/appointments/search'])
        }
      this.toastr.successToastr('Logged in successfully!', 'Success');
      } else {
        this.spinnerService.hide();
        this.showLoginError = true;
        this.toastr.errorToastr('Please enter valid credentials.')
      }
      console.log(data);
    },
    (err: any)=>{
      this.spinnerService.hide();
      this.toastr.errorToastr(err['error']['message'] ? err['error']['message'] : 'Please enter valid credentials!', 'Error');
    });
    // this.router.navigate(['/pages/appointments/search'])
}


registerUser(): any{
  let isInvalid = false;
    Object.keys(this.loginForm.controls).forEach(element => {
      if(this.loginForm.controls[element].value === ''){
        this.toastr.errorToastr(element.toUpperCase()+' is required', 'Error')
        isInvalid = true;
      }
    });
    if(!isInvalid){
      this.spinnerService.show();
      this.showLoginError = false;
      let requestObj = this.loginForm?.value;
      requestObj['isDoctor'] = JSON.parse(requestObj['isDoctor'])
      this.loginService.registerUser(requestObj).subscribe((data:any) => {
        if(data['status'] === 'success'){
        this.spinnerService.hide();
        this.toastr.successToastr('User Registered successfully, check your mail for the confirmation!', 'Success');
        this.loginForm.reset();
        this.isLogin = true;
        
      } else {
        this.spinnerService.hide();
          this.showLoginError = true;
        }
        console.log(data);
      },
      (err: any)=>{
        this.spinnerService.hide();
        this.toastr.errorToastr(err['error']['message'] ? err['error']['message'] : 'Something went wrong!', 'Error');
        console.log(err['error']['message'])
      });
  
  } 
    }
 

}

