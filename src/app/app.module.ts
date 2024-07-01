import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import routes from './app.routes'; // Importa le rotte correttamente
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { DipendenteComponent } from './dipendente/dipendente.component';


@NgModule({
  declarations: [
   
  ],

  imports: [
    BrowserModule,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    AdminComponent,
    DipendenteComponent,
    LoginComponent, 
    AppComponent, 
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) // Usa le rotte importate qui
  ],

  providers: [
    
  ],

  bootstrap: []
})
export class AppModule { }

