import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puppies',
  templateUrl: './puppies.component.html',
  styleUrls: ['./puppies.component.css']
})
export class PuppiesComponent {

  constructor() {
  }

  ngOnInit() {
    window.scrollTo(0, 0);
  }
}
