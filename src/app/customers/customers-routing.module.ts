import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomersModule} from './customers.module';
import {QueryCustomerComponent} from './query-customer/query-customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomersModule,
    children: [
      { path: '', redirectTo: 'query-customer', pathMatch: 'full' },
      { path: 'query-customer', component: QueryCustomerComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
