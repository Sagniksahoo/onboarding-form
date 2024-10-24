import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfrafromComponent } from './pages/infrafrom/infrafrom.component';
import { ErrorComponent } from './pages/error/error.component';

const routes: Routes = [
  
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
 },
 {
  path: 'app-infrafrom',
  component: InfrafromComponent,
  pathMatch: 'full',
},
{
  path: '**',
  component: ErrorComponent,
  pathMatch: 'full',
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
