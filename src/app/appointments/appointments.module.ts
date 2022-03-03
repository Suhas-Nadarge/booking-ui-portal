import { ViewAppointmentsComponent } from './view-appointments/view-appointments.component';
import { SearchDoctorComponent } from './search-doctor/search-doctor.component';
import { BookAppointmentComponent } from './book-appointment/book-appointment.component';


import { AppointmentsRoutingModule } from './appointments-routing.module';

import { 
	IgxCalendarModule,
	IgxDialogModule
 } from "igniteui-angular";
import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxAutocompleteModule } from 'ngx-angular-autocomplete';
 

@NgModule({
  declarations: [BookAppointmentComponent,SearchDoctorComponent,ViewAppointmentsComponent],
  imports: [CommonModule,
    AppointmentsRoutingModule,
    IgxCalendarModule,
    NgxAutocompleteModule


  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  // exports: [IgxCalendarModule]
})
export class AppointmentsModule { }
