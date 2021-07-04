import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    //canActivate: [AuthGuard],
    component: DashboardComponent,
    pathMatch: 'full'
  },
  //? add lazy modules to routing
  {
    path: 'user',
    loadChildren: () => import('./components/user/user.module').then(module => module.UserModule)
  },
  //? Not Found page
  // {
  //   path: '**',
  //   component: MaintenErrorComponent,
  //   children: []
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
