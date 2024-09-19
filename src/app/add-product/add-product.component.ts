import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../shared/product.service';
import { UtilitiesService } from '../shared/utilities.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productForm;
  id:string|undefined
   constructor(private fb: FormBuilder,
    private productservice:ProductService,
    private snackbarservice:UtilitiesService,
    private router:Router,
    private activeRoute:ActivatedRoute
  ) {}

  
  editdata=false
  ngOnInit(): void {
    // console.log(this.activeRoute.snapshot.params['id'])
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      brand: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      stock: ['', [Validators.required, Validators.min(0)]],
      image: [null, Validators.required],
      desc: ['']
    });

    this.id = this.activeRoute.snapshot.paramMap.get('id')
    if(this.id){
      this.editdata=true
      this.productservice.getProductById(this.id).subscribe((res:any)=>{
         this.productForm.patchValue(res);
      })
    }
     
}

  imageUrl:any
  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload=()=>{
        this.imageUrl= reader.result
        this.productForm.patchValue({
          image: this.imageUrl
        });
      }
     
    }
  }

  onSubmit(): void {
    // console.log(this.productForm)
    if(!this.editdata){
    if (this.productForm.valid) {
          //  console.log(this.productForm.value)
        this.productservice.createProduct(this.productForm.value).subscribe(()=>{
          this.snackbarservice.showSnackBar("product added")
          this.router.navigateByUrl('/products')
        })
   }
  }
  else {
    this.productservice.updateProduct(this.id,this.productForm.value).subscribe(()=>{
      this.snackbarservice.showSnackBar("product updated")
      this.router.navigateByUrl('/products')
    })
  }
}

}
