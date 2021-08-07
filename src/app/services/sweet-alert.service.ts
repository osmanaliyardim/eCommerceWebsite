import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  // Servisi global anlamda default olarak ekleyen yer (yeni)
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  success(message:string){
        // SweetAlert2 kullanımı
        Swal.fire({
          icon: 'success',
          title: message,
          showConfirmButton: false,
          timer: 1500
        })
  }
}
