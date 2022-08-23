import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  book: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('https://api.angular.schule/book/9783864906466').subscribe(
      b => this.book = b
    );
  }
}
