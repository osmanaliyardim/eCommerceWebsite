import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
  getProducts(categoryId):Observable<Product[]>{

    let newPath = this.url;

    // Eğer bir parametre varsa url'e ekle
    if(categoryId){
      newPath = newPath + "?categoryId=" + categoryId;
    }
    
    return this.http.get<Product[]>(newPath).pipe(
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

  addProduct(product:Product):Observable<Product>{
    
    const httpOptions = {
      headers:new HttpHeaders({
        "Content-Type":"application/json",
        "Authorization":"Token"
      })
    }
    
    return this.http.post<Product>(this.url, product, httpOptions).pipe(
      tap(data => console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

}
