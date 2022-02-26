import { MainLayoutModule } from './layout/main-layout/main-layout.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';





const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/main-layout/main-layout.module').then(m => m.MainLayoutModule)
  },
  
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}