import { AppointmentService } from './../../services/appointment.service';
import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.scss'],
})
export class SearchDoctorComponent implements OnInit {
  allDocList = [];
  constructor(
    public router: Router,
    private spinnerService: NgxSpinnerService,
    public appService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.getAllDocs();
  }

  getAllDocs() {
    this.spinnerService.show();
    this.appService.getAllDoctors().subscribe((data: any) => {
      if (data) {
        this.spinnerService.hide();
        this.allDocList = data['doctors'];
      }
    });
  }

  navigateBooking() {
    // this.router.navigate(['/pages/appointments/book-appointment'])
  }

  selectEvent(event: any) {
    console.log(event);
    localStorage.setItem('doctors_id', event.id);
    this.router.navigate(['/pages/appointments/book-appointment'], {
      state: { _id: event.id, full_name: event.full_name },
    });
  }
}
