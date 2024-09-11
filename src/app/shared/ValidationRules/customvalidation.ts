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


export let maxWordValidator=(max: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } | null => {
      if (!control.value) { return null}
  
      const wordCount = control.value.trim().split(/\s+/).length;
  
      if (wordCount > max) {
        return { maxWord: { required: max, actual: wordCount } }
      }
        else return null
    }
  }