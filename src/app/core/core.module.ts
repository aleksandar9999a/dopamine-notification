import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationComponent } from './notification/notification.component';
import { ActionsComponent } from './actions/actions.component';
import { MenuService } from './services/menu.service';
import { FirestoreService } from './services/firestore.service';



@NgModule({
  declarations: [NavigationComponent, NotificationsComponent, NotificationComponent, ActionsComponent],
  imports: [
    CommonModule
  ],
  providers: [
    MenuService,
    FirestoreService
  ],
  exports: [NavigationComponent, NotificationsComponent, ActionsComponent]
})
export class Core { }
