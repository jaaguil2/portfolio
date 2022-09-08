import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BarComponent } from './components/bar/bar.component';
import { ListComponent } from './components/list/list.component';
import {
  EDUCATION,
  FRAMEWORKS,
  LANGUAGES,
  PROFICIENCIES,
} from './constants/about-me.constants';
import { Institute, Knowledge, Skill } from './models/about-me.interface';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  standalone: true,
  selector: 'app-about-me',
  imports: [
    CommonModule,
    MatCardModule,
    ListComponent,
    BarComponent,
    MatDividerModule,
  ],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  public readonly proficiencies: Knowledge[] = [...PROFICIENCIES].sort(
    this.alphaSort
  );
  public readonly education: Institute[] = [...EDUCATION].sort(this.alphaSort);
  public readonly frameworks: Skill[] = [...FRAMEWORKS].sort(this.alphaSort);
  public readonly languages: Skill[] = [...LANGUAGES].sort(this.alphaSort);

  cards: string[] = ['frameworks', 'languages', 'proficiencies', 'education'];

  alphaSort(a: any, b: any): number {
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  }
}
