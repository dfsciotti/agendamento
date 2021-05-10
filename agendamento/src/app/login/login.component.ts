import { Component, OnInit } from '@angular/core';
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
  empresas : EmpresaDto[];
  
    constructor(private loginService : LoginService, private empresaService : EmpresaService)
    {
      this.credentials = new Credentials();

      this.empresaService.getEmpresas()
      .subscribe((emp: EmpresaDto[]) => {
        this.empresas = emp,
          emp.forEach(function (e) {
              this.empresaDropdown.options.push({ key: this.e.Id, value: this.e.Fantasia });        
          });
    
      });
    }

    onClickEntrar(): void {

      this.credentials.login = (<HTMLInputElement>document.getElementById("tbUsuario")).value;
      this.credentials.password = (<HTMLInputElement>document.getElementById("tbSenha")).value;
      this.loginService.getToken(this.credentials);                
    };

}


