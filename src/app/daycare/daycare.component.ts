import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daycare',
  templateUrl: './daycare.component.html',
  styleUrls: ['./daycare.component.css']
})
export class DaycareComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
