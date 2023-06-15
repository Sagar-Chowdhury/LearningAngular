import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { RoomsComponent } from './rooms/rooms.component';
import { ErrorComponentComponent } from './error-component/error-component.component';
import { RoomBookingComponent } from './rooms/room-booking/room-booking.component';
import { RoomsAddComponent } from './rooms/rooms-add/rooms-add.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'rooms',loadChildren: ()=> import('./rooms/rooms.module').then(m => m.RoomsModule)},
  {path:'employee',component:EmployeeComponent},
  {path:'**',component:ErrorComponentComponent},
  {path:'',redirectTo:'/rooms',pathMatch:'full'},
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
