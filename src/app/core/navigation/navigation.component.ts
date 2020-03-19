import { Component, OnInit, OnDestroy } from '@angular/core';
import { MenuService } from '../services/menu.service';
import { FirestoreService } from '../services/firestore.service';
import { INotification } from 'src/app/interfaces/notification.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {
  length: number = 0;
  notifications: Observable<INotification[][]>;
  subs: Subscription;

  constructor(
    private menuService: MenuService,
    private fs: FirestoreService
  ) {
    this.notifications = fs.getNotifications();
  }

  private filterNotifications(arr: any) {
    return arr.filter(not => not.type !== 'bonus')
  }

  private calculateLength(arr: any) {
      return this.length = this.filterNotifications(arr).length;
  }

  toggle() {
    return this.menuService.toggle();
  }

  ngOnInit(): void {
    this.subs = this.notifications.subscribe(this.calculateLength.bind(this));
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
