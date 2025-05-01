import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaymentsModule} from './payments.module';
import {RejectedPaymentComponent} from './rejected-payment/rejected-payment.component';
import {QueryPaymentComponent} from './query-payment/query-payment.component';

const routes: Routes = [
  {
    path: '',
    component: PaymentsModule,
    children: [
      { path: '', redirectTo: 'query-account', pathMatch: 'full' },
      { path: 'query-payment', component: QueryPaymentComponent },
      { path: 'rejected-payment', component: RejectedPaymentComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
