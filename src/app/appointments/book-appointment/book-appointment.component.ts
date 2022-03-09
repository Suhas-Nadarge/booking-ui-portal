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
}
