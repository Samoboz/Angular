import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtikelListComponent } from './artikel-list/artikel-list.component'; // Beispiel-Komponente
import { ArtikelComponent } from './artikel/artikel.component'; // Beispiel-Komponente

const routes: Routes = [
  { path: '', component: ArtikelListComponent },  // Startseite
  { path: 'artikel/:id', component: ArtikelComponent },  // Einzelner Artikel
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
