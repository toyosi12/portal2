import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent } from './dashboard/dashboard.component';
import {MyProfileComponent } from './my-profile/my-profile.component';

//import {DepartmentDetailComponent} from './department-detail/department-detail.component';

const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'my-profile',component:MyProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents = [
  DashboardComponent,
  MyProfileComponent
]
