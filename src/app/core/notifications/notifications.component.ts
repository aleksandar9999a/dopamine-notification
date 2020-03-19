import { Component, OnInit, OnDestroy } from '@angular/core';
import { fade } from './notifications.animations';
import { MenuService } from '../services/menu.service';
import { Subscription, Observable } from 'rxjs';
import { INotification } from 'src/app/interfaces/notification.interface';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  animations: [fade]
})
export class NotificationsComponent implements OnInit, OnDestroy {
  isOpen = false;
  subscriber: Subscription;
  notifications: Observable<INotification[][]>;

  constructor(
    private menuService: MenuService,
    private fs: FirestoreService
    ) {
      this.notifications = fs.getNotifications();
     }

  private changeState(state: boolean) {
    this.isOpen = state;
  }

  ngOnInit(): void {
    this.subscriber = this.menuService.state.subscribe(this.changeState.bind(this));
  }

  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

}
