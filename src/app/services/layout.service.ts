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

@Injectable()
export class LayoutService {
  layoutTest?: string;

  constructor(private breakpointObserver: BreakpointObserver) {}

  getLayoutTest(): Observable<Layout> {
    return this.breakpointObserver.observe(breakpoints).pipe(
      map((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            const layoutCode: string = breakpointMap.get(query) ?? 'x';
            return this.getLayout(layoutCode);
          }
        }
        return {
          device: 'Web',
          orientation: 'Landscape',
        };
      })
    );
    // return this.breakpointObserver.observe(breakpoints).subscribe((result) => {
    //   for (const query of Object.keys(result.breakpoints)) {
    //     if (result.breakpoints[query]) {
    //       const layoutCode: string = breakpointMap.get(query) ?? 'x';
    //       this.layoutTest = this.getLayout(layoutCode);
    //     }
    //   }
    // });
  }

  public getLayout(layout: string): Layout {
    this.layoutTest = layout;
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
}
