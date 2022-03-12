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
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { ReactiveFormsModule } from '@angular/forms';
 

@NgModule({
  declarations: [BookAppointmentComponent,SearchDoctorComponent,ViewAppointmentsComponent, PatientHistoryComponent],
  imports: [CommonModule,
    AppointmentsRoutingModule,
    IgxCalendarModule,
    NgxAutocompleteModule,
    ReactiveFormsModule


  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  // exports: [IgxCalendarModule]
})
export class AppointmentsModule { }
