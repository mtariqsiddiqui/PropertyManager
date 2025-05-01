import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {QueryRefundComponent} from './query-refund/query-refund.component';

const routes: Routes = [
  {  path: '', redirectTo: 'query-refund', pathMatch: 'full' },
  { path: 'query-refund', component: QueryRefundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefundsRoutingModule { }
