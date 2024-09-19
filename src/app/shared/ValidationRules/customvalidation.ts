import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export const matchingValues=(control1:string,control2:string):ValidatorFn=> {
    return (control: AbstractControl): {[key:string]:boolean} | null =>{
        const controlN1 = control.get(control1)
        const controlN2 = control.get(control2)
    if(controlN1 && controlN2 && controlN1.value != controlN2.value){
        return {'notEqual':true}
    }
    else return null
}
}

export const maxWordCount=(maxWords:number):ValidatorFn=> {
    return (control: AbstractControl): {[key:string]:object} | null =>{
      const val = control.value || '';
      const count = val.trim().split(/\s+/).length //    aaa   bbbb ccc
      if(count > maxWords){
        return {wordExceeded:{required:maxWords,actual:count}}
      }
      return null
}
}