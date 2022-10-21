import { Injectable } from '@angular/core';
import { Device, Layout, Orientation } from '../models/layout.model';

@Injectable()
export class LayoutService {
  constructor() {}

  public getLayout(layout: string): Layout {
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
