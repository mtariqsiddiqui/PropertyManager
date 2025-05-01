import { Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ApplicationDashboardComponent} from './application-dashboard/application-dashboard.component';
import {MaintenanceDashboardComponent} from './maintenance-dashboard/maintenance-dashboard.component';
import {ProjectOnboardingComponent} from './project-onboarding/project-onboarding.component';
import {ProjectTreeComponent} from "./project-tree/project-tree.component";
import {DetailsViewComponent} from "./details-view/details-view.component";
import {NavTestComponent} from "./nav-test/nav-test.component";

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule) },
  { path: 'bills', loadChildren: () => import('./bills/bills.module').then(m => m.BillsModule) },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  { path: 'refunds', loadChildren: () => import('./refunds/refunds.module').then(m => m.RefundsModule) },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  { path: 'files', loadChildren: () => import('./files/files.module').then(m => m.FilesModule) },
  { path: 'users', loadChildren: () => import('./user-management/user-management.module').then(m => m.UserManagementModule) },

  // Start Testing of components directly
  { path: 'dashboard', component: ApplicationDashboardComponent },
  { path: 'main-dashboard', component: MaintenanceDashboardComponent },
  { path: 'project-onboarding', component: ProjectOnboardingComponent },
  { path: 'details-view', component: DetailsViewComponent },
  { path: 'project-tree', component: ProjectTreeComponent },
  { path: 'nav-test', component: NavTestComponent },

  // End of Testing of components directly
  { path: '**', loadComponent: () => import( './page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent) }
];
