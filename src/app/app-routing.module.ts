import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"employee/:id",
    component:EmployeeDetailsComponent
  },
  {
    path:"update/:id",
    component:UpdateEmployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
