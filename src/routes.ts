import { Route } from '@angular/router';
import { PageNotFoundComponent } from './app/common/page-not-found/page-not-found.component';
import { LandingComponent } from './app/pages/landing/landing.component';

export const ROUTES: Route[] = [
  { path: 'home', component: LandingComponent },
  {
    path: 'about-me',
    loadComponent: () =>
      import('./app/pages/about-me/about-me.component').then(
        (mod) => mod.AboutMeComponent
      ),
  },
  {
    path: 'projects',
    loadComponent: () =>
      import('./app/pages/projects/projects.component').then(
        (mod) => mod.ProjectsComponent
      ),
  },
  {
    path: 'contact-me',
    loadComponent: () =>
      import('./app/pages/contact-me/contact-me.component').then(
        (mod) => mod.ContactMeComponent
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
