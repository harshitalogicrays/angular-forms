import { Component, inject } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/Product';
import { HttpErrorResponse } from '@angular/common/http';
import { UtilitiesService } from '../shared/utilities.service';

@Component({
  selector: 'app-fetch-products',
  templateUrl: './fetch-products.component.html',
  styleUrl: './fetch-products.component.css'
})
export class FetchProductsComponent {
  isLoading=false
  productService:ProductService=inject(ProductService)
  snackBar:UtilitiesService=inject(UtilitiesService)
  products:Product[] = []
  errorMessage:string | null =null
  ngOnInit(): void {
    this.isLoading=true
    this.productService.getAvailableStockProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message
        this.snackBar.showSnackBar(this.errorMessage)
        this.isLoading = false;
      }
    })
   }
}
