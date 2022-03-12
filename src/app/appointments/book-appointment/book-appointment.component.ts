import { AppointmentService } from './../../services/appointment.service';
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
  id = null;
  doc_full_Name = '';
  constructor(public router: Router, public appService:AppointmentService) {
    this.id = this.router.getCurrentNavigation()?.extras.state?._id
    this.doc_full_Name = this.router.getCurrentNavigation()?.extras.state?.full_name
    if(!this.id) {
      this.router.navigate(['/pages/appointments/search'])
    }
   }
  isBooked = false;
  ngOnInit(): void {
    this.appService.getDayAppointments(this.id).subscribe((data:any)=>{

      console.log(data)
    
    });
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
