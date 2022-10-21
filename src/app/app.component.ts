import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';
import { LayoutService } from './services/layout.service';
import { NavComponent } from './shared/components/nav/nav.component';
import { breakpoints, Layout, breakpointMap } from './models/layout.model';
import { MatToolbarModule } from '@angular/material/toolbar';

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

  constructor(
    private layoutService: LayoutService,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.breakpointObserver.observe(breakpoints).subscribe((result) => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          const layoutCode: string = breakpointMap.get(query) ?? 'x';
          this.layout = this.layoutService.getLayout(layoutCode);
        }
      }
    });
  }
}

// TODO: handle device: check if mobile to use mobile bar
// [ ]: make mobile bar
// [ ]: mobile bar for landscape???
// TODO: handle orientation: new side bar like stellaris vs. standard mobile on bot
