import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials } from '../models/credentials';
import { EmpresaDto } from '../models/empresa';
import { EmpresaService } from '../services/empresa.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  title = 'dsvarejo';
  credentials : Credentials;  
  empresas : Observable<any>;

  
    constructor(private loginService : LoginService, private empresaService : EmpresaService)
    {
      this.credentials = new Credentials();
      this.getEmpresas();
    }

    getEmpresas() : void
    {
        this.empresas = this.empresaService.getEmpresas();
    }

    onClickEntrar(): void {

      this.credentials.login = (<HTMLInputElement>document.getElementById("tbUsuario")).value;
      this.credentials.password = (<HTMLInputElement>document.getElementById("tbSenha")).value;
      this.loginService.getToken(this.credentials);          
    };

}


