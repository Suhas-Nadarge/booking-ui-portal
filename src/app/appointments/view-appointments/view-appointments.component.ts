import { ToastrManager } from 'ng6-toastr-notifications';
import { AppointmentService } from './../../services/appointment.service';
import { appointmentList } from './../../../constant';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.scss']
})
export class ViewAppointmentsComponent implements OnInit {
  
  modalRef!: BsModalRef;


  appointmentList : any
  today = new Date()
  index: any;
  constructor(public appService: AppointmentService,private modalService: BsModalService,private spinnerService: NgxSpinnerService,public toast: ToastrManager) { }
  doctors_id = Number(localStorage.getItem('id'))
  ngOnInit(): void {
   this.getAllAppointments()
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
 }



  getAllAppointments(): any {
    this.spinnerService.show();
    const reqObj={
      'isPatient': false,
      'id':this.doctors_id
    }
    this.appService.getDocsAppointments(reqObj).subscribe((data: any)=>{
      if(data){
      this.spinnerService.hide();
      this.appointmentList = data['appointments'].sort((first: any, second: any) => 0 - (new Date(first.appointment_date) > new Date(second.appointment_date) ? 1 : -1));;
      this.appointmentList.map((ele: any)=> ele['appointment_date']= new Date(ele['appointment_date']))  
    }
    })
  }
  cancel(index: any){
    this.index = index
  }

  cancelAppointment(flag: any){
    if (!flag){
      this.modalRef.hide()
    } else {
    this.modalRef.hide()  
    this.spinnerService.show();
    const requestObj = {
      doctors_id:this.doctors_id,
      patient_id:this.appointmentList[this.index]['patient_id'],
      app_id: this.appointmentList[this.index]['id']
    }
    this.appService.cancelAppointment(requestObj).subscribe((data: any)=>{
      if(data){    
    this.spinnerService.hide();
    this.getAllAppointments(); 
        this.toast.successToastr('Appointment Cancelled Successfully')
      }
    })
  }
  }
  
}
