import { Component, Input } from '@angular/core';
import { Product } from '../shared/Product';
@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
 @Input() product:Product
}
