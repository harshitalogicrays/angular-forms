import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../shared/product.service';
import { Product } from '../shared/Product';
import { UtilitiesService } from '../shared/utilities.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent implements OnInit {
  productService:ProductService=inject(ProductService)
  snackBarService:UtilitiesService=inject(UtilitiesService)
  router:Router=inject(Router)
  products:Product[] = []
  ngOnInit(): void {
    this.productService.getProducts().subscribe({next:(res)=>{
      this.products = res
    },
    error:(error)=>{
      this.snackBarService.showSnackBar(error)
    }
  })
  }

  deleteProduct(id:string){
    this.productService.deleteProduct(id).subscribe({
      complete:()=>{
        this.snackBarService.showSnackBar("product deleted")
        this.productService.getProducts().subscribe((res)=>{
          this.products = res
        })
      }
    })
  }

  editProduct(id:string){
    this.router.navigate(['/editproduct',id])
  }
}
