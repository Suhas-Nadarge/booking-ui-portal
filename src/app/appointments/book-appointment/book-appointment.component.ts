import { AppointmentService } from './../../services/appointment.service';
import { Router } from '@angular/router';
import { TimeSlots } from './../../../constant';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup, 
  FormBuilder,
  Validators,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrManager } from 'ng6-toastr-notifications';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.component.html',
  styleUrls: ['./book-appointment.component.scss'],
})
export class BookAppointmentComponent implements OnInit {
  timeSlot = TimeSlots;
  id = null;
  selectedSlot: any;
  userObj: any;
  bookingForm!: FormGroup;
  doc_full_Name = '';
  min = new Date();
  bookedSlot : any;
  constructor(
    public router: Router,
    public fb: FormBuilder,
    public toastr: ToastrManager,
    public appService: AppointmentService,
    private spinnerService: NgxSpinnerService
  ) {
    this.id = this.router.getCurrentNavigation()?.extras.state?._id;
    this.doc_full_Name =
      this.router.getCurrentNavigation()?.extras.state?.full_name;
    if (!this.id) {
      this.router.navigate(['/pages/appointments/search']);
    }
  }
  isBooked = false;
  ngOnInit(): void {
    this.createForm();
    this.refreshSlots();
    this.getAllAppointments();
  }
  createForm() {
    this.bookingForm = this.fb.group({
      reason: ['', Validators.required],
      additional_comments: ['', Validators.required],
      slot_number: ['', Validators.required],
      appointment_date: ['', Validators.required],
      doctors_id: this.id,
      slot: '',
      patient_id: Number(localStorage.getItem('id')),
    });

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
  navigateBooking() {}
  changeDate(evt: any) {
    this.refreshSlots();
    this.bookingForm.get('slot_number')?.setValue('');
    this.bookingForm.get('slot')?.setValue('');
    this.spinnerService.show();
    this.bookingForm.get('appointment_date')?.setValue(new Date(evt));
    this.updateSlots(new Date(evt));
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
  selectSlot(id: any, slot: any) {
    this.bookingForm.get('slot_number')?.setValue(id);
    this.bookingForm.get('slot')?.setValue(slot);
    console.log(id, slot);
  }

  bookAppointment() {
    if(new Date() > new Date(this.bookingForm.get('appointment_date')?.value)){
      this.bookingForm.get('appointment_date')?.setValue('');
      this.toastr.warningToastr('Please select the future date', 'Warning')
    } else {
      if(this.bookingForm.get('appointment_date')?.value === ''){
        this.toastr.errorToastr(
          'Please select the Appointment Date!',
          'Error'
        );
      } else if(this.bookingForm.get('slot_number')?.value === ''){
        this.toastr.errorToastr(
          'Please select the slot for Appointment!',
          'Error'
        );
      } else if(this.bookingForm.get('reason')?.value === ''){
        this.toastr.errorToastr(
          'Reason is required',
          'Error'
        );
      } else {
        this.spinnerService.show();
        this.bookingForm.controls
        this.appService
          .bookAppointment(this.bookingForm.value)
          .subscribe((data: any) => {
            if (data) {
              this.spinnerService.hide();
              this.toastr.successToastr(
                'Appointment Booked Successfully!',
                'Success'
              );
              this.isBooked = true;
            }
          });
    
      }
  
    }
    
  }
}
