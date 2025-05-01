import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BillsModule} from './bills.module';
import {QueryBillComponent} from './query-bill/query-bill.component';
import {RejectedBillComponent} from './rejected-bill/rejected-bill.component';

const routes: Routes = [
  {
    path: '',
    component: BillsModule,
    children: [
      { path: '', redirectTo: 'query-bill', pathMatch: 'full' },
      { path: 'query-bill', component: QueryBillComponent },
      { path: 'rejected-bill', component: RejectedBillComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BillsRoutingModule { }
