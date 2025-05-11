import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtikelComponent } from '../artikel/artikel.component';
import { articles } from '../article-data';
import { ArticleModel } from '../article';

@Component({
  selector: 'app-artikel-list',
  standalone: true,
  imports: [CommonModule, ArtikelComponent],
  templateUrl: './artikel-list.component.html',
  styleUrls: ['./artikel-list.component.css']
})
export class ArtikelListComponent {
  public articles: ArticleModel[] = articles;
}
