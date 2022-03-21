import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AppointmentService } from 'src/app/services/appointment.service';
import { TimeSlots } from 'src/constant';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  timeSlot = TimeSlots;
  id = localStorage.getItem('id');
  selectedSlot: any;
  userObj: any;
  doc_full_Name = '';
  min = new Date();
  bookedSlot : any;
  constructor(public appService: AppointmentService,private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getAllAppointments()
  }
  changeDate(evt: any) {
    this.refreshSlots();
    // this.bookingForm.get('slot_number')?.setValue('');
    // this.bookingForm.get('slot')?.setValue('');
    // this.spinnerService.show();
    // this.bookingForm.get('appointment_date')?.setValue(new Date(evt));
    this.updateSlots(new Date(evt));
  }  

  getAllAppointments():any {
    this.spinnerService.show();
    const reqObj={
      'isPatient': false,
      'id':this.id
    }
    this.appService.getDocsAppointments(reqObj).subscribe((data: any) => {
      this.bookedSlot = data['appointments']
      this.spinnerService.hide();
      this.updateSlots(new Date())
    });
  }


  updateSlots(evt: any) {
    const currentDateSlot = this.bookedSlot.filter((data:any)=>new Date(data.appointment_date).toDateString() === new Date(evt).toDateString() )
    // alert(currentDateSlot.length);
    if(currentDateSlot.length){
      
      currentDateSlot.forEach((element: any) => {
        const index = Math.trunc(element.slot_number / 3);
        const remain = element.slot_number % 3;
        if(remain === 1) {
          this.timeSlot[index].slot_A.isAvailable = false; 
        } else if(remain === 2){
          this.timeSlot[index].slot_B.isAvailable = false; 
        } else {
          this.timeSlot[index-1].slot_C.isAvailable = false; 
        }
      this.spinnerService.hide();
   
    });
  }
   else {
    this.refreshSlots();
    this.spinnerService.hide();
   }
  }
  refreshSlots() {
    this.timeSlot.filter(data=> {
      data.slot_A.isAvailable = true;
      data.slot_B.isAvailable = true;
      data.slot_C.isAvailable = true;
    });
  }
}
