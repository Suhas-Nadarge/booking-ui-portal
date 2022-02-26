import { AppointmentsModule } from './../../appointments/appointments.module';
import { UsersModule } from './../../users/users.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './main-layout.component';

const routes: Routes = [

  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'user',
        loadChildren: () => import('./../../users/users.module').then(m => m.UsersModule),
        data: { preload: true, name: 'default' }
      },
      {
        path: 'appointments',
        loadChildren: () => import('./../../appointments/appointments.module').then(m => m.AppointmentsModule),
        data: { preload: true, name: 'default' } 
      },
  
]
},
{
  path: '**',
  redirectTo: 'user'
}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule { }

