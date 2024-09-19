import { Component, ElementRef,  ViewChild } from '@angular/core';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
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
  }
  

}
