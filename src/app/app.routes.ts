import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DipendenteComponent } from './dipendente/dipendente.component';
import { SignupComponent } from './signup/signup.component';



export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component : HomeComponent },
  { path: 'home', component : HomeComponent },
  { path: 'admin', component : AdminComponent },
  { path: 'dipendente', component : DipendenteComponent },
  { path: 'signup', component : SignupComponent },
  { path: '**', component : HomeComponent } // Per gestire le route non trovate
];

export default routes;




