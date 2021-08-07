import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  // Servisi global anlamda default olarak ekleyen yer (yeni)
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  //default başarılı alerti
  success(message: string) {
    // SweetAlert2 kullanımı
    Swal.fire({
      icon: 'success',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

  //default hata alerti
  error(message: string) {
    Swal.fire({
      icon: 'error',
      title: message,
      showConfirmButton: false,
      timer: 1500
    })
  }

    //default uyarı alerti
    warning(message: string) {
      Swal.fire({
        icon: 'warning',
        title: message,
        showConfirmButton: false,
        timer: 1500
      })
    }

}