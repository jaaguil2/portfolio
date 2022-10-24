import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { LayoutService } from './services/layout.service';
import { NavComponent } from './shared/components/nav/nav.component';
import { breakpoints, Layout, breakpointMap } from './models/layout.model';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutType } from './models/app.model';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    NavComponent,
    MatToolbarModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  layout!: Layout;
  layoutType!: LayoutType;

  constructor(
    private layoutService: LayoutService,
  ) {}

  ngOnInit(): void {
    this.layoutService.getLayout().subscribe((layout: Layout) => {
      this.layout = layout;
      this.layoutType = this.layoutService.getLayoutType(layout);
      console.log(this.layoutType)
    });
  }
}

// TODO: handle device: check if mobile to use mobile bar
// [ ]: mobile bar for landscape??? no
// TODO: handle orientation: new side bar like stellaris vs. standard mobile on top
