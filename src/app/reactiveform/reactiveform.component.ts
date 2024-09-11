import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { matchingValues, maxWordValidator } from '../shared/ValidationRules/customvalidation';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent implements OnInit{
  gender:any[]=[{text:"Male",value:'m',id:'male'},{text:"Female",value:'f',id:'female'},{text:"Other",value:'o',id:'other'}]

  reactiveform:any

  //valueChanges
  countryStateMap = {
    USA: ['New York', 'California', 'Florida'],
    Canada: ['Ontario', 'Quebec', 'British Columbia'],
    India: ['Maharashtra', 'Gujarat', 'Karnataka'],
  };
  states: string[] = [];

  //statuschanges
  snackBar:MatSnackBar=inject(MatSnackBar)

  ngOnInit(): void {
    this.reactiveform = new FormGroup({
      name:new FormControl('',[Validators.required,maxWordValidator(2)]),
      email:new FormControl('',[Validators.required,Validators.email]),
      dob:new FormControl(''),
      mobile:new FormControl(''),
      password:new FormControl('',Validators.required),
      cpassword:new FormControl('',Validators.required),
      gender:new FormControl('m'),
      address:new FormGroup({
        street:new FormControl(''),
        city:new FormControl(''),
        state:new FormControl(''),
        country:new FormControl(''),
        pincode:new FormControl(''),
      }), 
      hobbies:new FormArray([])
    },{validators:matchingValues('password','cpassword')}) 

  //valueChanges
  this.reactiveform.get('address.country')?.valueChanges.subscribe((selectedCountry: string) => {
    const stateControl = this.reactiveform.get('address.state');
    if (selectedCountry && this.countryStateMap[selectedCountry]) {
      this.states = this.countryStateMap[selectedCountry];
      stateControl?.setValue('');
   } else {
        stateControl?.setValue('');
    }
  });


  //statusChange 
  // this.reactiveform.statusChanges.subscribe((status:any)=>{
  //   if(status=="VALID"){
  //     this.showSnackbar('Form is valid!');
  //   }
  // })
  }

  // showSnackbar(message: string) {
  //   this.snackBar.open(message, 'Close', {
  //     duration: 3000, // Duration in milliseconds
  //     horizontalPosition: 'right',
  //     verticalPosition: 'top',
  //   });
  // }

  AddHobbies(){
      (<FormArray>this.reactiveform.get('hobbies')).push(new FormControl(null,Validators.required))
  }

  DeleteHobby(index:number){
    (<FormArray>this.reactiveform.get('hobbies')).removeAt(index)
  }

  onFormSubmit(){
    console.log(this.reactiveform)
  }

  loadAddress():void{
    this.reactiveform.setValue({
      name:this.reactiveform.get('name').value,
      email:this.reactiveform.get('email').value,
      dob:this.reactiveform.get('dob').value,
      mobile:this.reactiveform.get('mobile').value,
      password:this.reactiveform.get('password').value,
      cpassword:this.reactiveform.get('cpassword').value,
      gender:this.reactiveform.get('gender').value,
      address:{
        street:'prahlad nagar',
        city:'Ahmedabad',
        state:'Gujarat',
        country:"India",
        pincode:380051,
      }, 
      hobbies:[]
  }) 
  }
}
