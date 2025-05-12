import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ArtikelListComponent } from './artikel-list/artikel-list.component'; // Stell sicher, dass der Pfad korrekt ist!
import { ArtikelComponent } from './artikel/artikel.component'; // Importiere auch diese, falls in Routen oder Template verwendet
import { ArtikelEditorComponent } from './artikel-editor/artikel-editor.component'; // Importiere auch diese, falls in Routen oder Template verwendet
import { ImpressumComponent } from './impressum/impressum.component'; // Importiere auch diese, falls in Routen oder Template verwendet
import { KontaktComponent } from './kontakt/kontakt.component'; // Importiere auch diese, falls in Routen oder Template verwendet
import { ArtikelShareComponent } from './artikel-share/artikel-share.component'; // Importiere auch diese, falls in Routen oder Template verwendet
import { FooterComponent } from './footer/footer.component'; // Importiere auch diese, falls in Routen oder Template verwendet

const routes: Routes = [
  { path: '', component: ArtikelListComponent },
  { path: 'impressum', component: ImpressumComponent },
  { path: 'kontakt', component: KontaktComponent },
  // ... weitere Routen
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppModule {}