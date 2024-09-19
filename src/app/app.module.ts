import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainlayoutComponent } from './layout/mainlayout/mainlayout.component';
import { NolayoutComponent } from './layout/nolayout/nolayout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { TdfformComponent } from './tdfform/tdfform.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { FetchProductsComponent } from './fetch-products/fetch-products.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { SearchComponent } from './search/search.component';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    AppComponent,HeaderComponent,MainlayoutComponent,NolayoutComponent,SidebarComponent,PagenotfoundComponent, TdfformComponent, ReactiveformComponent, AddProductComponent, ProductlistComponent, ProductCardComponent,FetchProductsComponent, LoaderComponent, ProductDetailsComponent,SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule
  ],
  providers: [provideHttpClient(withFetch()), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
