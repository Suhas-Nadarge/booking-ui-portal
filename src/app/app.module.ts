import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";

import { 
	IgxCalendarModule,
	IgxDialogModule
 } from "igniteui-angular";
 import { ToastrModule as ToastsModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ToastsModule.forRoot(), // ToastModule added
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastsModule.forRoot(),
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  exports : [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
