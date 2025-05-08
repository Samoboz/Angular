import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleModel } from '../article';
import { articles } from '../article-data'; // <-- DAS hier ist wichtig

@Component({
  selector: 'app-artikel-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artikel-list.component.html',
  styleUrls: ['./artikel-list.component.css']
})
export class ArtikelListComponent implements OnInit {
  public articles: ArticleModel[] = [];

  ngOnInit(): void {
    this.articles = articles; // <-- Jetzt verwendest du die importierten Daten
  }
}
