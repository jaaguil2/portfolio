import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

export interface Link {
  name: string;
  route: string;
  icon: string;
}

@Component({
  standalone: true,
  selector: 'app-nav',
  imports: [CommonModule, RouterModule, MatListModule, MatIconModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  links: Link[] = [
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
