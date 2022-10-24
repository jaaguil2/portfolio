import { Injectable } from '@angular/core';
import {
  Device,
  Layout,
  Orientation,
  breakpoints,
  breakpointMap,
} from '../models/layout.model';
import { BreakpointObserver } from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { LayoutType } from '../models/app.model';

@Injectable()
export class LayoutService {
  constructor(private breakpointObserver: BreakpointObserver) {}

  public getLayout(): Observable<Layout> {
    return this.breakpointObserver.observe(breakpoints).pipe(
      map((result) => {
        let layout!: Layout;
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const layoutCode: string = breakpointMap.get(query) ?? 'x';
            layout = this.formatLayout(layoutCode);
          }
        }
        return layout;
      })
    );
  }

  private formatLayout(layout: string): Layout {
    if (layout.startsWith('x')) {
      return {
        device: 'Web',
        orientation: 'Landscape',
      };
    }
    const layoutArr: string[] = layout.split('|');
    const setDevice = layoutArr[0] as Device;
    const setOrientation = layoutArr[1] as Orientation;
    return {
      device: setDevice,
      orientation: setOrientation,
    };
  }

  public getLayoutType(layout: Layout): LayoutType {
    if (layout.device === 'Web') {
      return 'sideExtra';
    }
    if (layout.device === 'Mobile' && layout.orientation === 'Portrait') {
      return 'bar';
    }
    if (layout.device === 'Mobile' && layout.orientation === 'Landscape') {
      return 'side';
    }
    if (layout.device === 'Tablet' && layout.orientation === 'Portrait') {
      return 'bar';
    }
    if (layout.device === 'Tablet' && layout.orientation === 'Landscape') {
      return 'side';
    }
    return 'side';
  }
}
