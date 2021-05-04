import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService) { 
    this.toastr.toastrConfig.positionClass = "toast-bottom-right";
  }

  showSuccess(message){
      this.toastr.success(message, "Sucesso")
  }

  showError(message){
      this.toastr.error(message, "Erro")
  }

  showInfo(message){
      this.toastr.info(message, "Aviso");
  }

  showWarning(message){
    this.toastr.warning(message, "Atenção")
  }

}