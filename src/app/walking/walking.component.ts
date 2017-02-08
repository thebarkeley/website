import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-walking',
  templateUrl: './walking.component.html',
  styleUrls: ['./walking.component.css']
})
export class WalkingComponent {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
