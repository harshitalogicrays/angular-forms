import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { HomeComponent } from './home/home.component';
import { NolayoutComponent } from './layout/nolayout/nolayout.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { TdfformComponent } from './tdfform/tdfform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { FetchProductsComponent } from './fetch-products/fetch-products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

 const routes: Routes = [
  {path:'',component:MainlayoutComponent,
      children:[
          {path:'',component:HomeComponent},
          {path:'tdfform',component:TdfformComponent},
          {path:'reactiveform',component:ReactiveformComponent},
          {path:'addproduct',component:AddProductComponent},
          {path:'products',component:ProductlistComponent},
          {path:'editproduct/:id',component:AddProductComponent},
          {path:'card',component:FetchProductsComponent},
          {path:'product/details/:id',component:ProductDetailsComponent}
     ]  },
  {path:'',component:NolayoutComponent,
      children:[
          {path:'**',component:PagenotfoundComponent}
      ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
