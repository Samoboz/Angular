import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // Importiere RouterOutlet!
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, FooterComponent], // Füge RouterOutlet zum imports-Array hinzu
  template: `
    <app-header></app-header>
    <div class="layout">
      <app-sidebar></app-sidebar>
      <main class="content">
        <router-outlet></router-outlet>
      </main>
    </div>
    <app-footer></app-footer>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mein-blog';
}