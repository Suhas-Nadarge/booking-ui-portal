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
    this.updateSlots(new Date().toISOString())
  }
  navigateBooking(){}
  changeDate(evt:any){
    console.log(evt);
    this.updateSlots(evt.toISOString());
  }
  updateSlots(date: any) {
    throw new Error('Method not implemented.');
  }
}
