import { Routes } from '@angular/router';

import { HomePage } from './pages/home/home.page';




export const routes: Routes = [

  {
    path: '',
    component: HomePage
  },


  /*
  {
    
    path: 'auth',

    children: [

      { path: '', redirectTo: 'auth', pathMatch: 'full' }, 

      { path: 'login', component: LoginPage , canActivate: [ authRedirectGuard ]},

    ],
    
  },
  */




  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  }

];