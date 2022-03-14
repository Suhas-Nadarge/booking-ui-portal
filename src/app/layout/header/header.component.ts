import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(public router: Router, public toast: ToastrManager) { }
  
  ngOnInit(): void {
  }

  logout(): any{
    localStorage.clear();
    this.toast.successToastr('User logged out successfully', 'Success')
    this.router.navigate([''])
  }

  navigateHome(){
    if(localStorage.getItem('isDoctor')){
      this.router.navigate(['/pages/appointments/view-appointments'])
    } else {
      this.router.navigate(['/pages/appointments/search'])
    }
  }

}
