import { Component, OnInit } from '@angular/core';
import { fade } from './notifications.animations';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  animations: [fade]
})
export class NotificationsComponent implements OnInit {
  isOpen = false;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.state.subscribe((newState: boolean) => this.isOpen = newState);
  }

}
