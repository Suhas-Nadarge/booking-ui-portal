import { appointmentList } from './../../../constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-appointments',
  templateUrl: './view-appointments.component.html',
  styleUrls: ['./view-appointments.component.scss']
})
export class ViewAppointmentsComponent implements OnInit {

  appointmentList = appointmentList;
  constructor() { }

  ngOnInit(): void {
  }

  cancelAppointment(index: any){
    this.appointmentList[index]['isCancelled'] = true;
    this.appointmentList[index]['status'] = 'Cancelled';

  }

}
