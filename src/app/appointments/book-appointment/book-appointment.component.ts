import { AppointmentService } from './../../services/appointment.service';
import { Router } from '@angular/router';
import { TimeSlots } from './../../../constant';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormGroupName, FormBuilder, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss']
})
export class BookAppointmentComponent implements OnInit {

  timeSlot = TimeSlots;
  id = null;
  selectedSlot: any
  userObj : any
  bookingForm!: FormGroup;
  doc_full_Name = '';
  constructor(public router: Router, public fb: FormBuilder, public toastr:ToastrManager ,public appService:AppointmentService, private spinnerService: NgxSpinnerService) {
    this.id = this.router.getCurrentNavigation()?.extras.state?._id
    this.doc_full_Name = this.router.getCurrentNavigation()?.extras.state?.full_name
    if(!this.id) {
      this.router.navigate(['/pages/appointments/search'])
    }
   }
  isBooked = false;
  ngOnInit(): void {
    this.spinnerService.show();
    this.appService.getDocsAppointments(this.id).subscribe((data:any)=>{
    this.spinnerService.hide();
      console.log(data)
      this.createForm();
    
    });
  }
  createForm() {
    this.bookingForm = this.fb.group({
      reason:['',Validators.required],
      additional_comments:['',Validators.required],
      slot_number:['',Validators.required],
      appointment_date:['',Validators.required],
      doctors_id: this.id,
      slot:'',
      patient_id: Number(localStorage.getItem('id'))
    })

    // reason = data['reason']
    // appointment_date = data['appointment_date']
    // additional_comments = data['additional_comments']
    // slot_number = data['slot_number']
    // patient_id = data['patient_id']
    // doctors_id = data['doctors_id'] 
    
  }
  navigateBooking(){}
  changeDate(evt:any){
    this.spinnerService.show();
    console.log(evt);
    this.bookingForm.get('appointment_date')?.setValue(new Date(evt))

    this.updateSlots(evt.toISOString());
  }
  updateSlots(date: any) {
    this.timeSlot.filter(data=> {
      data.slot_A.isAvailable = true;
      data.slot_B.isAvailable = true;
      data.slot_C.isAvailable = true;
    });
    this.spinnerService.hide();

  }
  selectSlot(id: any, slot: any){
    this.bookingForm.get('slot_number')?.setValue(id)
    this.bookingForm.get('slot')?.setValue(slot)
    console.log(id,slot)
  }

  bookAppointment(){
    this.spinnerService.show();
    this.appService.bookAppointment(this.bookingForm.value).subscribe((data: any)=>{
      if(data){
      this.spinnerService.hide(); 
      this.toastr.successToastr('Appointment Booked Successfully!', 'Success');
      this.isBooked = true;
      }

    });
  }
}
