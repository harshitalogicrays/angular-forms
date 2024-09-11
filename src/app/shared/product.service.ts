import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private _http=inject(HttpClient)

  addproduct(product:any){
    this._http.post("http://localhost:3000/products",product).subscribe(response => {
      console.log('Product successfully added!', response);
    });
  }
}
