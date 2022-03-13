import { ToastrManager } from 'ng6-toastr-notifications';
import { AppointmentService } from './../../services/appointment.service';
import { appointmentList } from './../../../constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.scss']
})
export class ViewAppointmentsComponent implements OnInit {

  appointmentList : any
  constructor(public appService: AppointmentService, public toast: ToastrManager) { }
  doctors_id = Number(localStorage.getItem('id'))
  ngOnInit(): void {
   this.getAllAppointments()
  }

  getAllAppointments(): any {
    this.appService.getDocsAppointments(this.doctors_id).subscribe((data: any)=>{
      if(data){
        this.appointmentList = data['appointments'];
      }
    })
  }
  cancelAppointment(index: any){
    // this.appointmentList[index]['isCancelled'] = true;
    // this.appointmentList[index]['status'] = 'Cancelled';
    const requestObj = {
      doctors_id:this.doctors_id,
      patient_id:this.appointmentList[index]['patient_id']
    }
    this.appService.cancelAppointment(requestObj).subscribe((data: any)=>{
      if(data){
        this.toast.successToastr('Appointment Cancelled Successfully')
      }
    })
  }

}
