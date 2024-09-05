import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent implements OnInit{
  gender:any[]=[{text:"Male",value:'m',id:'male'},{text:"Female",value:'f',id:'female'},{text:"Other",value:'o',id:'other'}]

  reactiveform:any
  ngOnInit(): void {
    this.reactiveform = new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      dob:new FormControl(''),
      mobile:new FormControl(''),
      password:new FormControl(''),
      cpassword:new FormControl(''),
      gender:new FormControl('m'),
      address:new FormGroup({
        street:new FormControl(''),
        city:new FormControl(''),
        state:new FormControl(''),
        country:new FormControl(''),
        pincode:new FormControl(''),
      })
    })
  }

  onFormSubmit(){
    console.log(this.reactiveform)
  }
}
