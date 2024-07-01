import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports : [NavbarComponent,RouterOutlet],
  standalone : true
})
export class AppComponent {
  title = 'frontend-progetto';
}

