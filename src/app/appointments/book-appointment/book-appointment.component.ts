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
    this.spinnerService.show();
    this.appService.getDocsAppointments(this.id).subscribe((data: any) => {
      this.bookedSlot = data['appointments']
      this.spinnerService.hide();
    });
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
  navigateBooking() {}
  changeDate(evt: any) {
    this.bookingForm.get('slot_number')?.setValue('');
    this.bookingForm.get('slot')?.setValue('');
    this.spinnerService.show();
    this.bookingForm.get('appointment_date')?.setValue(new Date(evt));
    this.updateSlots(new Date(evt));
  }
  updateSlots(evt: any) {
    if(this.bookedSlot.length){
      this.bookedSlot.forEach((element: any) => {
        const date_a = new Date(element.appointment_date).getDate()
        console.log(new Date(element.appointment_date),new Date(evt))
        if(new Date(element.appointment_date).toDateString() === new Date(evt).toDateString() ){

        const index = Math.trunc(element.slot_number / 3);
        const remain = element.slot_number % 3;
        if(remain === 1) {
          this.timeSlot[index].slot_A.isAvailable = false; 
        } else if(remain === 2){
          this.timeSlot[index].slot_B.isAvailable = false; 
        } else {
          this.timeSlot[index].slot_C.isAvailable = false; 
        }
      } else { 
        this.refreshSlots();
      }
    });
  }
    this.spinnerService.hide();
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
