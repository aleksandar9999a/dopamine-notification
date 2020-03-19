import { Component, OnInit } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { FirestoreService } from '../services/firestore.service';
import { INotification } from 'src/app/interfaces/notification.interface';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  length: number = 0;

  constructor(
    private menuService: MenuService,
    private fs: FirestoreService
  ) {
    fs.getNotifications().forEach(arr => {
      this.length = this.filterNotifications(arr).length;
    });
  }

  filterNotifications(arr: any) {
    return arr.filter(not => not.type !== 'bonus')
  }

  toggle() {
    return this.menuService.toggle();
  }

  ngOnInit(): void {
  }

}
