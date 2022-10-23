import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Layout } from 'src/app/models/layout.model';
import { LayoutService } from 'src/app/services/layout.service';
import { LandingChips } from './models/landing.model';

@Component({
  standalone: true,
  selector: 'app-landing',
  imports: [CommonModule, MatChipsModule, MatSnackBarModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit{
  chips: LandingChips = {
    Innovative:
      'The best way to predict the future is to create it.  - Alan Kay',
    Passionate:
      'I have no special talents. I am only passionately curious.  - Albert Einstein',
    Driven:
      'The will to win, the desire to succeed, the urge to reach your full potential… these are the keys that will unlock the door to personal excellence.  - Confucius',
  };

  layout!: Layout;

  constructor(private snackBar: MatSnackBar, private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.getLayoutTest().subscribe(r => {
      console.log(r)
      this.layout = r;
    });
  }

  onChipClick(chipMessage: string): void {
    this.snackBar.open(chipMessage, '| Close', {
      duration: 10000,
    });
  }
}
