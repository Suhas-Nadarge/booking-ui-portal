import { AppointmentService } from './../../services/appointment.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  // isDoctor : any;
  constructor(public router: Router, public appService: AppointmentService ,public toast: ToastrManager) {
    // this.appService.$userSub.subscribe((data:any)=>{
    //   if(data){
    //     this.isDoctor = localStorage?.getItem('isDoctor')
    //   }
    // })
    
   }
   isDoctor(){
     console.log(localStorage?.getItem('isDoctor'))
     return localStorage?.getItem('isDoctor')
   }
  ngOnInit(): void {
  
  }

  logout(): any{
    localStorage.clear();
    this.toast.successToastr('User logged out successfully', 'Success')
    this.router.navigate([''])
  }

  navigateHome(){
    if(localStorage.getItem('isDoctor') === 'true'){
      this.router.navigate(['/pages/appointments/view-appointments'])
    } else {
      this.router.navigate(['/pages/appointments/search'])
    }
  }

}
