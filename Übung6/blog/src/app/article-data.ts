import { ArticleModel } from './article';

export const articles: ArticleModel[] = [
  new ArticleModel(
    'CSS Grundlagen',
    new Date('2025-05-08'),
    'Lisa Meier',
    'Ein Einstieg in CSS für Webseiten',
    'CSS ist ein Gestaltungsmittel für Webinhalte...',
    ['CSS', 'Frontend', 'Design']
  ),
  new ArticleModel(
    'JavaScript Basics',
    new Date('2025-05-09'),
    'Jonas Bauer',
    'Was ist JavaScript und wozu nutzt man es?',
    'JavaScript ist eine Programmiersprache...',
    ['JavaScript', 'Web', 'Programmierung']
  )
];
