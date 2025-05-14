import {Component, inject} from '@angular/core';
import {AccountService} from '../../../services/account.service';
import {Account} from '../../../models/account-model';
import {MatCard, MatCardContent, MatCardTitle} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {AsyncPipe, CommonModule} from '@angular/common';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle,
    MatCardContent,
    MatListModule,
    AsyncPipe,
    CommonModule
  ],
  styleUrl: './account-list.component.scss'
})
export class AccountListComponent {
  accountService = inject(AccountService);
  accounts$ = this.accountService.getAccounts();
  selectedAccount?: Account;

  constructor() {}

  selectAccount(account: Account) {
    this.selectedAccount = account;
  }
}
