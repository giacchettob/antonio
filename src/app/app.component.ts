import { Component, OnInit } from '@angular/core';

import { NewService } from './new-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private newService: NewService) {}

  ngOnInit() {
    this.newService.fetchData();
  }
}