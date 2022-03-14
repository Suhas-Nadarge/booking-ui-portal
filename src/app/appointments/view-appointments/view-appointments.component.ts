import { ToastrManager } from 'ng6-toastr-notifications';
import { AppointmentService } from './../../services/appointment.service';
import { appointmentList } from './../../../constant';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.scss']
})
export class ViewAppointmentsComponent implements OnInit {

  appointmentList : any
  constructor(public appService: AppointmentService, private spinnerService: NgxSpinnerService,public toast: ToastrManager) { }
  doctors_id = Number(localStorage.getItem('id'))
  ngOnInit(): void {
   this.getAllAppointments()
  }

  getAllAppointments(): any {
    this.spinnerService.show();
    this.appService.getDocsAppointments(this.doctors_id).subscribe((data: any)=>{
      if(data){
    this.spinnerService.hide();

        this.appointmentList = data['appointments'];
      }
    })
  }
  cancelAppointment(index: any){
    this.spinnerService.show();

    const requestObj = {
      doctors_id:this.doctors_id,
      patient_id:this.appointmentList[index]['patient_id']
    }
    this.appService.cancelAppointment(requestObj).subscribe((data: any)=>{
      if(data){
    this.spinnerService.hide();

        this.toast.successToastr('Appointment Cancelled Successfully')
      }
    })
    this.getAllAppointments(); 
  }

}
