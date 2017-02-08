import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
