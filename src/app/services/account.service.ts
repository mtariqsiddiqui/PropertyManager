import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Account} from '../models/account-model';
@Injectable({  providedIn: 'root'})
export class AccountService {
  private accounts = new BehaviorSubject<Account[]>([]);
  private currentId = 1;

  getAccounts(): Observable<Account[]> {
    return this.accounts.asObservable();
  }

  addAccount(name: string, balance: number) {
    const newAccount: Account = {
      id: this.currentId++,
      name: name,
      balance: balance,
    };
    this.accounts.next([...this.accounts.getValue(), newAccount]);
  }
}
