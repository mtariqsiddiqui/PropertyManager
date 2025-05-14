import { Component } from '@angular/core';
import {AccountFormComponent} from './account-form/account-form.component';
import {AccountListComponent} from './account-list/account-list.component';


@Component({
  selector: 'app-rejected-account',
  imports: [AccountFormComponent, AccountListComponent],
  templateUrl: './rejected-account.component.html',
  standalone: true,
  styleUrl: './rejected-account.component.scss'
})
export class RejectedAccountComponent {
}
