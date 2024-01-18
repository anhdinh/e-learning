import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class CustomValidators{
  private constructor() {
  }

 public static matchPasswordValidator(control: AbstractControl): ValidationErrors|null {
    let password = control.get("password");
    let confirmPassword = control.get("confirmPassword");
    if(password && confirmPassword && password?.value!=confirmPassword?.value){
      return {
        passwordMatchError:true,
      }
    }
    return null;
  }
}

