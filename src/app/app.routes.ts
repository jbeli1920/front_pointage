import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ProfileComponent } from './pages/profile/profile.component';
import {UpdateProfileComponent} from './pages/update-profile/update-profile.component';
import {UserManagementComponent} from './pages/user-management/user-management.component';

export const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'update-profile', component: UpdateProfileComponent },
  { path: 'user-management', component: UserManagementComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
