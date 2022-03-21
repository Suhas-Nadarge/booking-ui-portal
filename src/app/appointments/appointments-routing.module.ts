import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../services/auth.guard';
import { CalendarComponent } from './calendar/calendar.component';



const routes: Routes = [{
  path: 'book-appointment',
  component: BookAppointmentComponent, canActivate: [AuthGuard]
},
{
  path: 'search',
  component: SearchDoctorComponent, canActivate: [AuthGuard]
},
{
  path: 'view-appointments',
  component: ViewAppointmentsComponent, canActivate: [AuthGuard]
},
{
  path: 'history',
  component: PatientHistoryComponent, canActivate: [AuthGuard]
},
{
  path: 'calendar',
  component: CalendarComponent, canActivate: [AuthGuard]
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentsRoutingModule {

 }
