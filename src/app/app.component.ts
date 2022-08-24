import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  text = "not clicked"
  constructor() {}

  ngOnInit(): void {
  }

  clicked() {
    this.text = "clicked"
  }
}
