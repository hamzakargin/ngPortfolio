import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    RouterOutlet,
    MatSidenavModule,
    HeaderComponent,
    SidenavListComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  onToggle = () => {};
}
