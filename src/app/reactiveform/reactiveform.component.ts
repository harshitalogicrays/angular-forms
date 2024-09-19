import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { matchingValues, maxWordCount } from '../shared/ValidationRules/customvalidation';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UtilitiesService } from '../shared/utilities.service';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent implements OnInit{
  gender:any[]=[{text:"Male",value:'m',id:'male'},{text:"Female",value:'f',id:'female'},{text:"Other",value:'o',id:'other'}]
  reactiveform:any

  snackBar:MatSnackBar=inject(MatSnackBar)
  http:HttpClient=inject(HttpClient)
  router:Router=inject(Router)
  snackbarService:UtilitiesService=inject(UtilitiesService)

  countrystate={
    India:["Gujarat","Maharashtra","MP","UP","Rajasthan"],
    USA:["New York","California","Florida"],
    Canada:["Alberta","Nunavut","Manitoba"]
  }
  stateArr:string[]=[]

  ngOnInit(): void {
    this.reactiveform = new FormGroup({
      name:new FormControl('',[Validators.required,maxWordCount(2)]),
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

    this.reactiveform.get('address.country')?.valueChanges.subscribe((country:string)=>{
      const statecontrol  =this.reactiveform.get('address.state')
      if(country && this.countrystate[country]){
        this.stateArr = this.countrystate[country]
        statecontrol?.setValue('')
      }
      else statecontrol?.setValue('')
    })

    // this.reactiveform.statusChanges.subscribe((status:any)=>{
    //   if(status=='VALID'){
    //     this.showSnackBar('Form is Valid')
    //   }
    // })
  }

 
  AddHobbies(){
      (<FormArray>this.reactiveform.get('hobbies')).push(new FormControl(null,Validators.required))
  }

  DeleteHobby(index:number){
    (<FormArray>this.reactiveform.get('hobbies')).removeAt(index)
  }

  onFormSubmit(){
    console.log(this.reactiveform.value)
    this.http.post("http://localhost:3000/users",this.reactiveform.value).subscribe(()=>{
      this.snackbarService.showSnackBar("Data Submitted",3000)
      this.router.navigate(['/'])
    })
  }


  loadAddress(){
    // this.reactiveform.setValue({
    //   name:'',
    //   email:'',
    //   dob:'',
    //   mobile:'',
    //   password:'',
    //   cpassword:'',
    //   gender:'',
    //   address:{
    //     street:"A 313 Safal Pegasus",
    //     city:"Ahmedabad",
    //     country:'',
    //     state:'',
    //     pincode:''
    //   },
    //   hobbies:[]
    // }) 
 
    this.reactiveform.patchValue({
      address:{
        street:"A 313 Safal Pegasus",
        city:"Ahmedabad",
      }
    }) 
  }
}
