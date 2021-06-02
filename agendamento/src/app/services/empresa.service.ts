import { Injectable } from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EmpresaDto } from '../models/empresa';
import { map } from "rxjs/operators"; 

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private apiUrl = 'https://localhost:44365/api/empresa_dto';  

  constructor(private http: HttpClient) { }  
      
  getEmpresas(): Observable<EmpresaDto> {  
      return this.http.get<EmpresaDto>(this.apiUrl); 
  }   

}