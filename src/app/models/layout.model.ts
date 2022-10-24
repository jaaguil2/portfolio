import { Breakpoints } from '@angular/cdk/layout';

export type Device = 'Web' | 'Mobile' | 'Tablet';
export type Orientation = 'Portrait' | 'Landscape';

export interface Layout {
  device: Device;
  orientation: Orientation;
}

export const breakpointMap = new Map([
  [Breakpoints.HandsetLandscape, 'Mobile|Landscape'],
  [Breakpoints.HandsetPortrait, 'Mobile|Portrait'],
  [Breakpoints.TabletLandscape, 'Tablet|Landscape'],
  [Breakpoints.TabletPortrait, 'Tablet|Portrait'],
  [Breakpoints.WebLandscape, 'Web|Landscape'],
  [Breakpoints.WebPortrait, 'Web|Portrait'],
]);

export const breakpoints = [
  Breakpoints.HandsetLandscape,
  Breakpoints.HandsetPortrait,
  Breakpoints.TabletLandscape,
  Breakpoints.TabletPortrait,
  Breakpoints.WebLandscape,
  Breakpoints.WebPortrait,
];
