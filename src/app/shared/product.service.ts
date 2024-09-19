import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from './Product';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url:string = "http://localhost:3000/products"
  http:HttpClient=inject(HttpClient)

  createProduct(product:any){
    const myheaders = new HttpHeaders({'custom-header':'my ang project',
      'Authorization':'harshita1111111'
    })
   return this.http.post(this.url,product,{headers:myheaders})
  }

getProducts(){
   return this.http.get<Product[]>(this.url).pipe(catchError(this.handleError))
}

deleteProduct(id:string){
  return this.http.delete(`${this.url}/${id}`)
}

getProductById(id:string){
  return this.http.get(`${this.url}/${id}`)
}

updateProduct(id:string,product:Product){
  return this.http.put(`${this.url}/${id}`,product)
}

getAvailableStockProducts(): Observable<Product[]> {
  return this.http.get<Product[]>(this.url)
    .pipe(
      map(products => products.filter(product => product.stock > 0))
    ).pipe(
      catchError(this.handleError)
    );;
}


private handleError(error: HttpErrorResponse) {
  let errorMessage = 'An unknown error occurred!';   
  if (error.status === 404) {
    // Custom message for 404 Not Found
    errorMessage = 'The URL is incorrect (404). Please check the URL.';
  } else {
    // Handle other HTTP error statuses
    errorMessage = `Error ${error.status}: ${error.message}`;
  }
  // Use the new throwError signature
  return throwError(() => new Error(errorMessage));
}
}


