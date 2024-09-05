import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      brand: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required],
      stock: ['', [Validators.required, Validators.min(0)]],
      image: [null, Validators.required]
    });
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
    
    if (this.productForm.valid) {
      // const formData = new FormData();
      // Object.keys(this.productForm.controls).forEach(key => {
      //   formData.append(key, this.productForm.get(key)?.value);
      // });
      console.log(this.productForm)

      this.http.post('http://localhost:3000/products', this.productForm.value)
        .subscribe(response => {
          console.log('Product successfully added!', response);
        });
    }
  }
}
