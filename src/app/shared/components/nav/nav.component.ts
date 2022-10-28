import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { Link } from './models/nav.models';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutType } from 'src/app/models/app.model';

@Component({
  standalone: true,
  selector: 'app-nav',
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
  ],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Input() navType!: LayoutType;

  public readonly links: Link[] = [
    {
      name: 'Home',
      route: '/home',
      icon: 'home',
    },
    {
      name: 'About Me',
      route: '/about-me',
      icon: 'account_box',
    },
    {
      name: 'Projects',
      route: '/projects',
      icon: 'perm_media',
    },
    {
      name: 'Contact Me',
      route: '/contact-me',
      icon: 'alternate_email',
    },
  ];
}
