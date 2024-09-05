import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user';

@Component({
  selector: 'app-tdfform',
  templateUrl: './tdfform.component.html',
  styleUrl: './tdfform.component.css'
})
export class TdfformComponent {

  user = new User("","","","","");

  gender:any[]=[{text:"Male",value:'m',id:'male'},{text:"Female",value:'f',id:'female'},{text:"Other",value:'o',id:'other'}]

  // onFormSubmit(regdata:NgForm){
    // console.log(regdata.value)
  // }

  @ViewChild('regfrm') regfrm:ElementRef
  onFormSubmit(){
    // console.log(this.user)
    console.log(this.regfrm)
  }
}
