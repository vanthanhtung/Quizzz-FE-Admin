import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },{
    path: 'login',
    component: LoginFormComponent
  }, 
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
        {
      path: 'admin',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
  }]},
  {
    path: 'admin/**',
    redirectTo: 'dashboard'
  }
  
]
