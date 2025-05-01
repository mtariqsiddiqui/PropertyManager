import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserProfileComponent} from './edit-my-profile/user-profile.component';
import {CreateUserComponent} from './create-user/create-user.component';
import {QueryUsersComponent} from './query-user/query-users.component';

const routes: Routes = [
  { path: '', redirectTo: 'user-profile', pathMatch: 'full'},
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'create-user', component: CreateUserComponent },
  { path: 'query-users', component: QueryUsersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
