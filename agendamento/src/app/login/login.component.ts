import { Component, OnInit } from '@angular/core';
import { Credentials } from '../models/credentials';
import { Empresa } from '../models/empresa';
import { EmpresaService } from '../services/empresa.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit{
  title = 'dsvarejo';
  credentials : Credentials;  
  empresas : Empresa[];
  _empresaService : EmpresaService;
  
    constructor(private loginService : LoginService, private empresaService : EmpresaService)
    {
      this.credentials = new Credentials();
      this._empresaService = empresaService;
    }

    ngOnInit(): void {
      this.empresas = this._empresaService.getEmpresas();
    }

    onClickEntrar(): void {

      this.credentials.login = (<HTMLInputElement>document.getElementById("tbUsuario")).value;
      this.credentials.password = (<HTMLInputElement>document.getElementById("tbSenha")).value;
      this.loginService.getToken(this.credentials);                
    };

}


