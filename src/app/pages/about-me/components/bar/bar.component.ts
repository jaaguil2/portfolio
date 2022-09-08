import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Skill } from '../../models/about-me.interface';

@Component({
  standalone: true,
  selector: 'about-me-bar',
  imports: [CommonModule, MatProgressBarModule],
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss'],
})
export class BarComponent {
  @Input() list!: Skill[];

  MAXVALUE = 5;
  PERCENT = 100;

  valueToPercent(value: number): number {
    return (this.PERCENT / this.MAXVALUE) * value;
  }
}
