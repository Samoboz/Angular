import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Hauptkomponente
import { AppRoutingModule } from './app-routing.module'; // Das Routing-Modul, das du später erstellt hast

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // Dein Routing-Modul hier importieren
  ],
  providers: [],
 
})
export class AppModule { }
