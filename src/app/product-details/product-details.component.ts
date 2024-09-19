import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../shared/Product';
import { ProductService } from '../shared/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  selectedProduct:Product
  productId:string
  currentIndex:number=0
  productService:ProductService=inject(ProductService)
  activatedRoute:ActivatedRoute=inject(ActivatedRoute)

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id')
    this.productService.getProducts().subscribe((data) => {
      this.currentIndex = data.findIndex(p => p.id === this.productId);
      this.selectedProduct = data[this.currentIndex];
    })
  }

}
