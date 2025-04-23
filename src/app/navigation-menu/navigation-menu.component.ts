import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-navigation-menu',
  imports: [
    MatListModule,
    RouterModule
  ],
  templateUrl: './navigation-menu.component.html',
  styleUrl: './navigation-menu.component.scss'
})
export class NavigationMenuComponent {
}
