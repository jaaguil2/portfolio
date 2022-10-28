import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { CONTACTS } from './constants/contact-me.constants';
import { Contact } from './models/contact-me.interface';
import { Clipboard } from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  standalone: true,
  selector: 'app-contact-me',
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatTooltipModule,
  ],
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.scss'],
})
export class ContactMeComponent {
  public readonly contacts: Contact[] = [...CONTACTS];

  constructor(private clipboard: Clipboard, private _snackBar: MatSnackBar) {}

  copyLinkToClipboard(text: string): void {
    this.clipboard.copy(text);
    this._snackBar.open('Copied!', 'Close', {
      duration: 2000,
    });
  }
}
