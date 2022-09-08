import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  standalone: true,
  selector: 'about-me-list',
  imports: [CommonModule, MatListModule, MatIconModule],
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @Input() list!: any[];
  @Input() type!: string;

  getType(): string {
    switch (this.type) {
      case 'education':
        return 'local_library';
      case 'proficiencies':
        return 'business_center';
      default:
        return 'chevron_right';
    }
  }
}
