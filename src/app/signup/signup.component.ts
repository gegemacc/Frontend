import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone : true,
  imports : [RouterModule, FormsModule, HttpClientModule]
})
export class SignupComponent implements OnInit{
  formData = {
    email: '',
    password: '',
    imports: [RouterModule, FormsModule, HttpClientModule]
  };

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  createUser(): void {
    this.http.post<any>('http://localhost:8080/api/users/signup', this.formData)
      .subscribe(
        response => {
          console.log('User created successfully:', response);
          // Implementa eventuali azioni aggiuntive dopo la creazione dell'utente, come il reindirizzamento alla pagina di login
        },
        error => {
          console.error('Error creating user:', error);
          // Implementa la gestione degli errori, ad esempio visualizzando un messaggio di errore all'utente
        }
      );
  }
}


