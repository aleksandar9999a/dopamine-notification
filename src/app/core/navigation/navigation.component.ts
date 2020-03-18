import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  toggle() {
    return this.menuService.toggle();
  }

  ngOnInit(): void {
  }

}
