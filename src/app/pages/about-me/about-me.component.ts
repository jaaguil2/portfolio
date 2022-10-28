import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
import { LayoutService } from 'src/app/services/layout.service';
import { Layout } from 'src/app/models/layout.model';

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
export class AboutMeComponent implements OnInit {
  public readonly proficiencies: Knowledge[] = [...PROFICIENCIES].sort(
    this.alphaSort
  );
  public readonly education: Institute[] = [...EDUCATION].sort(this.alphaSort);
  public readonly frameworks: Skill[] = [...FRAMEWORKS].sort(this.alphaSort);
  public readonly languages: Skill[] = [...LANGUAGES].sort(this.alphaSort);

  public readonly cards: string[] = [
    'frameworks',
    'languages',
    'proficiencies',
    'education',
  ];

  layout!: Layout;

  constructor(private layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutService.getLayout().subscribe((layout: Layout) => {
      this.layout = layout;
    });
  }

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
