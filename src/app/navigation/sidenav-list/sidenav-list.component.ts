import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListItem, MatListModule, MatNavList } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidenav-list',
  imports: [
    RouterLink,
    MatSidenavModule,
    MatListItem,
    MatIconModule,
    MatListModule,
    MatButtonModule,
  ],
  templateUrl: './sidenav-list.component.html',
  styleUrl: './sidenav-list.component.css',
})
export class SidenavListComponent implements OnInit {
  @Output() closeSidenav = new EventEmitter<void>();
  constructor() {}
  ngOnInit(): void {}
  onClose(): void {
    this.closeSidenav.emit();
  }
}
