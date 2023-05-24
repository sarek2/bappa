import { Component,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { StudentComponent } from './student/student.component';


const routes: Routes = [
  {
    path:'', redirectTo:'login', pathMatch:'full'
  },

  {
   path: 'signup', component: SignupComponent
   },

{
  path: 'login', component: LoginComponent
},
{
  path: 'employee-dashboard', component: EmployeeDashboardComponent
},
{
  path: 'student', component: StudentComponent
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
