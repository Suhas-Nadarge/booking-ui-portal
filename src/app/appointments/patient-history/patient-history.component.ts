import { Router } from '@angular/router';
import { AppointmentService } from './../../services/appointment.service';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService, Spinner } from 'ngx-spinner';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.scss']
})
export class PatientHistoryComponent implements OnInit {
  isBooked = false;
  appointmentList: any = [];
  today = new Date()
  appointment_date : any;
  isExpired: boolean =  false;
  constructor(public spinnerService: NgxSpinnerService, public router: Router,public appService: AppointmentService) { }

  ngOnInit(): void {
  this.getAllAppointments()
  }

  getAllAppointments(): any {
    this.spinnerService.show();
    const reqObj={
      'isPatient': true,
      'id':localStorage.getItem('id')
    }
    this.appService.getDocsAppointments(reqObj).subscribe((data: any)=>{
      if(data){
      this.spinnerService.hide();
      this.appointmentList = data['appointments'].sort((first: any, second: any) => 0 - (new Date(first.appointment_date) > new Date(second.appointment_date) ? 1 : -1));;
      this.appointment_date = new Date(this.appointmentList[0]?.appointment_date)
      this.isExpired = this.today > this.appointment_date ? true :false
      !this.appointmentList.length ? this.isBooked = false : this.isBooked =true
    }
    })
  }

}
