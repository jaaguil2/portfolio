import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { NavComponent } from './shared/components/nav/nav.component';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [CommonModule, RouterModule, MatSidenavModule, NavComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
