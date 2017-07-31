import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationService, NavigationItem } from './navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  selectedItem : NavigationItem;
  navigationItems : NavigationItem[] = [];

  constructor(private navigationService: NavigationService) {
    navigationService.getItems().then(items => {
      console.log(items)
      this.navigationItems = items;
      this.selectedItem = this.selectedItem ? this.selectedItem : this.navigationItems[0];
    }); 
  }

  selectNavigation(item) {
    this.selectedItem = item;
  }
}
