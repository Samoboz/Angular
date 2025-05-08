import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  // Sicherstellen, dass CommonModule importiert wird

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],  // Hier muss CommonModule eingebunden sein
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() articles: any[] = []; // Empfang der Artikel-Daten
  tagsMap: Map<string, number> = new Map();  // Map zur Speicherung der Tags

  ngOnInit(): void {
    this.initializeTags();
  }

  // Tags extrahieren und in Map speichern
  initializeTags(): void {
    this.articles.forEach(article => {
      article.tags.forEach((tag: string) => {
        if (this.tagsMap.has(tag)) {
          this.tagsMap.set(tag, this.tagsMap.get(tag)! + 1);
        } else {
          this.tagsMap.set(tag, 1);
        }
      });
    });
  }
}
