import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationComponent } from './notification/notification.component';
import { ActionsComponent } from './actions/actions.component';



@NgModule({
  declarations: [NavigationComponent, NotificationsComponent, NotificationComponent, ActionsComponent],
  imports: [
    CommonModule
  ],
  exports: [NavigationComponent, NotificationsComponent, ActionsComponent]
})
export class Core { }
