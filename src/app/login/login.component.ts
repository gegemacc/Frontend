import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone : true,
  imports : [FormsModule,RouterModule,RouterOutlet,HttpClientModule]
})
export class LoginComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  signin(data: { email: string, password: string }): void {
    this.http.post("http://localhost:8080/api/auth/signin", data).subscribe(response => {
      console.log('Response:', response);
      // Puoi aggiungere logica per redirezionare l'utente o mostrare messaggi di successo/errore
    }, error => {
      console.error('Error:', error);
    });
  }
}


