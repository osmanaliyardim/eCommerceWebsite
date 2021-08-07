import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Product } from '../product/product';
import { tap, catchError } from 'rxjs/operators';

// global bir servis olmasını istemediğimden
// buradaki providedIn: 'root' silindi
@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:3000/products";

  //Observable pattern uygulaması
  //Data dönene kadar bir çok işlem üzerinde uygulanabilir
  //İstenen fonksiyonlarla subscribe olunana kadar
  //İstenen her işlem uygulanabilir (loglama, hata yakalama gibi)
  getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.url).pipe(
      // Log alıyorum
      tap(data => console.log(JSON.stringify(data))),
      // Hata varsa hatayı döndürüyorum
      catchError(this.handleError)
    );
  }

  handleError(err : HttpErrorResponse){

    let errorMessage = "";

    if(err.error instanceof ErrorEvent){
      errorMessage = "Bir hata oluştu" + err.error.message;
    }
    else{
      errorMessage = "Sistemsel bir hata oluştu";
    }

    // string dönme hatası nedeniyle throwError
    return throwError(errorMessage);
  }

}
