import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials } from '../models/credentials';
import { NotificationService } from '../ds-components/notification.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public token : string = null;
  private apiUrl = 'https://localhost:44365/api/token';  

  constructor(private http: HttpClient, private notifyService : NotificationService) { }

  getToken(credentials : Credentials){

    const headers = { 'content-type': 'application/json'} 
    var body = JSON.stringify({login: credentials.login, password: credentials.password});

    this.http.post<string>(this.apiUrl, body, {'headers':headers}).subscribe(data => {     
        this.token = data;
        this.notifyService.showSuccess("Login realizado!");     
    },
    error => this.notifyService.showWarning("Usuário e/ou Senha inválidos."))

  }
}

