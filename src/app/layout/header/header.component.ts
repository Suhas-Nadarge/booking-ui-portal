import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }
  
  ngOnInit(): void {
  }

  logout(): any{
    localStorage.clear();
    this.router.navigate([''])
  }

}
