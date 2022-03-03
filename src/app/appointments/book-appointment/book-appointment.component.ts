import { TimeSlots } from './../../../constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {

  timeSlot = TimeSlots;
  constructor() { }

  ngOnInit(): void {
  }
  navigateBooking(){}
}
