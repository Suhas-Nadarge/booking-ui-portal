# BookingUiPortal

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.14.

## Development server
Run ng serve for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.


## Features

Login/Register

Search Doctors

Book Appointment

Cancel Appointment

View Appointment History

## Technologies and Modules Used ##


## 1. Angular - FrontEnd

UX: HTML,CSS Bootstrap

Ngx-toaster : To show the Success, Warning, Error messages.

ReactiveForms : To handle the all submit actions.

AuthGuard: To avoid manual routing to any page without logging into the system.

Ngx-spinner: To prevent the user by performing any action while data is getting loaded, which will helps to give better user experience.

Ngx-angular-autocomplete: This module is used to show the auto suggestions in search page.

Ignite-ui-angular: To show the calendar on booking page, we have used igcalendar from this module

## 2. Flask - Backend

Flask-Bcrypt - To encrypt the user password before storing to the database.

Flask-Cors - To support our application for all origins and methods.

Flask-Jsonpify - To convert responses to jsons which can be consumed by API calls.

Flask-Login - Took advantage of this powerful extension to make login and logout functionality more robust. It also includes decorator @login_required feature with which we can avoid unauthorized access to the application and routes.

Flask-Mail - Used to incorporate email functionality in the application
##


## Template used for Signup-signin  from https://bbbootstrap.com/snippets/bootstrap-signup-login-form-56423928


# Code scaffolding
Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

# Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory.

# Running unit tests
Run ng test to execute the unit tests via Karma.

# Running end-to-end tests
Run ng e2e to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

# Further help
To get more help on the Angular CLI use ng help or go check out the Angular CLI Overview and Command Reference page.


