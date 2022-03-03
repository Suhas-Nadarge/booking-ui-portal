import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.scss']
})
export class SearchDoctorComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigateBooking(){
this.router.navigate(['/pages/appointments/book-appointment'])
  }
  
}
