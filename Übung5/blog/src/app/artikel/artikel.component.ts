import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleModel } from '../article';

@Component({
  selector: 'app-artikel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artikel.component.html',
  styleUrls: ['./artikel.component.css']
})
export class ArtikelComponent {
  @Input() article!: ArticleModel;
}
