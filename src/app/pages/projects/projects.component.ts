import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  jects = [
    { name: 'p1', link: '#', img: 'Image', notes: 'This is about my project' },
  ];
  constructor() {}

  ngOnInit(): void {}
}
