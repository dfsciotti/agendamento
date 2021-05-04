import { formatCurrency } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../ds-components/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})

export class LoginComponent {
  title = 'dsvarejo';
  empresas = 
    [{ id: '1', fantasia: 'Empresa 1' },
      { id: '2', fantasia: 'Empresa 2' },
      { id: '3', fantasia: 'Empresa 3' },
      { id: '4', fantasia: 'Empresa 4' }
    ];
  
    constructor(private notifyService : NotificationService)
    {
      
    }

    onClickEntrar(value : any = undefined): void {
      if()  
      this.notifyService.showWarning("Usuário e/ou Senha inválidos.")
    };

}


