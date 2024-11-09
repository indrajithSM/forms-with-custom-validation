import { AbstractControl } from '@angular/forms';
// import { FormControl } from '@angular/forms';

// export class MathValidators extends FormControl {
//   override setValue(value:string, options:any){
//   console.log('value',value)
//   super.setValue(value+'*',{...options,emitModelToViewChange:true})

// }

export class MathValidators {
  static addition(target: string, firstOne: string, secondOne: string) {
    return (form: AbstractControl) => {
      const sum = form.value[target];
      const firstValue = form.value[firstOne];
      const secondValue = form.value[secondOne];
      if (firstValue + secondValue === parseInt(sum)) {
        return null;
      }
      return { addition: true };
    };
  }
}
