import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtikelListComponent } from './artikel-list/artikel-list.component'; // <-- Wichtig!

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ArtikelListComponent // <-- Hier eintragen
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
}
