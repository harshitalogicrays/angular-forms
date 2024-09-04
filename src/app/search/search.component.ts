import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CustomdirectiveDirective } from '../shared/customdirective.directive';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [MatIconModule,CustomdirectiveDirective],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
  outputs:['searchProducts']
})
export class SearchComponent {
  /*searchData:string=''
  updateSearch(val:HTMLInputElement){
    this.searchData = val.value
    this.searchProducts.emit(this.searchData)
  }
  searchProducts:EventEmitter<string> = new EventEmitter<string>();  */

  
  @ViewChild('searchtext')searchData:ElementRef
  updateSearch(){
    this.searchProducts.emit(this.searchData.nativeElement.value)
  }
  searchProducts:EventEmitter<string> = new EventEmitter<string>()
  

}
