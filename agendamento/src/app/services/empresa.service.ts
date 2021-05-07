import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empresa } from '../models/empresa';
import { NotificationService } from '../ds-components/notification.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private apiUrl = 'https://localhost:44365/api/empresa';  

  constructor(private http: HttpClient, private notifyService : NotificationService) { }

  getEmpresas() : any
  {
    const headers = { 'content-type': 'application/json'} 

    this.http.get<Empresa[]>(this.apiUrl, {'headers':headers}).subscribe(data => {     
        return data;   
    },
    error => this.notifyService.showWarning("Usuário e/ou Senha inválidos."))

  }
}
