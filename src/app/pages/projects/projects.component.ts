import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PROJECTS } from './constants/projects.constants';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  public readonly projects = [...PROJECTS];

  constructor() {}

  ngOnInit(): void {}
}
