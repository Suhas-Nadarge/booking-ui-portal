import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { NgxAutocompleteModule } from 'ngx-angular-autocomplete';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [LoginRegisterComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ]
})
export class UsersModule { }
