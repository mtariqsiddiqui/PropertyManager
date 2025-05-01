import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccountsModule} from './accounts.module';
import {QueryAccountComponent} from './query-account/query-account.component';
import {RejectedAccountComponent} from './rejected-account/rejected-account.component';

const routes: Routes = [
  {
    path: '',
    component: AccountsModule,
    children: [
      { path: '', redirectTo: 'query-account', pathMatch: 'full' },
      { path: 'query-account', component: QueryAccountComponent },
      { path: 'rejected-account', component: RejectedAccountComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
