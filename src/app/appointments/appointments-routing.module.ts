import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [{
  path: 'book-appointment',
  component: BookAppointmentComponent
},
{
  path: 'search',
  component: SearchDoctorComponent
},
{
  path: 'view-appointments',
  component: ViewAppointmentsComponent
},
{
  path: 'history',
  component: PatientHistoryComponent
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule {

 }
