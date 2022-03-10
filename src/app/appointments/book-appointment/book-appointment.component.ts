import { Router } from '@angular/router';
import { TimeSlots } from './../../../constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {

  timeSlot = TimeSlots;
  constructor(public router: Router) { }
  isBooked = false;
  ngOnInit(): void {
  }
  navigateBooking(){}
  changeDate(evt:any){
    console.log(evt);
    this.updateSlots(evt.toISOString());
  }
  updateSlots(date: any) {
    this.timeSlot.filter(data=> {
      data.slot_A.isAvailable = true;
      data.slot_B.isAvailable = true;
      data.slot_C.isAvailable = true;
    });
  }
  selectSlot(id: any, slot: any){
    console.log(id,slot)
  }

  bookAppointment(){
    this.isBooked = true;
  }
}
