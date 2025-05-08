// src/app/app.component.ts

import { Component }            from '@angular/core';
import { CommonModule, NgFor }         from '@angular/common';
import { ArtikelComponent } from './artikel/artikel.component';
import { KopfbereichComponent } from './kopfbereich/kopfbereich.component';
import { FussbereichComponent } from './fussbereich/fussbereich.component';
import { articles } from './article-data'; // importiere die Daten
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,            // macht die Komponente standalone
  imports: [
    CommonModule,              // für Angular-Direktiven wie *ngFor, *ngIf
    NgFor,
    ArtikelComponent,          // hier registrieren wir deine Artikel-Liste
    KopfbereichComponent,
    FussbereichComponent,
    SidebarComponent       
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  articleList = articles;
}
