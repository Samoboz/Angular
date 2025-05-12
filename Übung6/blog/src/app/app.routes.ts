import { Routes } from '@angular/router';
import { ArtikelListComponent } from './artikel-list/artikel-list.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';

export const routes: Routes = [
  { path: '', component: ArtikelListComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'kontakt', component: KontaktComponent },
  // ... weitere Routen für deine anderen standalone Komponenten
];