import { SharedModule } from './../shared/shared.module';
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
import { NgxSpinnerModule } from 'ngx-spinner';
import { CalendarComponent } from './calendar/calendar.component';
import { ModalModule, BsModalService } from 'ngx-bootstrap/modal';
import { AuthGuard } from '../services/auth.guard';

@NgModule({
  declarations: [BookAppointmentComponent,SearchDoctorComponent,ViewAppointmentsComponent, PatientHistoryComponent, CalendarComponent],
  imports: [CommonModule,
    AppointmentsRoutingModule,
    IgxCalendarModule,
    NgxAutocompleteModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    ModalModule.forRoot()

    // SharedModule


  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers:[BsModalService]
  // exports: [IgxCalendarModule]
})
export class AppointmentsModule { }
