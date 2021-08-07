import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Category } from '../category/category';

@Injectable()
export class CategoryService {

  constructor(private http:HttpClient) { }

  url = "http://localhost:3000/categories";

  //Observable pattern uygulaması
  //Data dönene kadar bir çok işlem üzerinde uygulanabilir
  //İstenen fonksiyonlarla subscribe olunana kadar
  //İstenen her işlem uygulanabilir (loglama, hata yakalama gibi)
  getCategories():Observable<Category[]>{
    return this.http.get<Category[]>(this.url).pipe(
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
