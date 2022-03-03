import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-doctor',
  templateUrl: './search-doctor.component.html',
  styleUrls: ['./search-doctor.component.scss']
})
export class SearchDoctorComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  navigateBooking(){
this.router.navigate(['/pages/appointments/book-appointment'])
  }
  public employees = [
    {
      "id": 1,
      "name": "Parsifal",
      "gender": "Male"
    }, {
      "id": 2,
      "name": "Mirabel",
      "gender": "Female"
    }, {
      "id": 3,
      "name": "Verne",
      "gender": "Male"
    }, {
      "id": 4,
      "name": "Julissa",
      "gender": "Female"
    }, {
      "id": 5,
      "name": "Chaddy",
      "gender": "Male"
    }, {
      "id": 6,
      "name": "Cosme",
      "gender": "Male"
    }]
  selectEvent(event:any) {
    console.log(event)
 }}
