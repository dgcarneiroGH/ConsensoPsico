import { SidebarService } from './../../services/sidebar.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  opened: boolean = false;

  constructor(
    public sidebarService: SidebarService
  ) { }

  toggleSidebar() {
    this.opened = !this.opened;
    console.log(this.opened);

  }
}
