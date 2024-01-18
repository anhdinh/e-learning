import {Component, OnInit} from '@angular/core';
import {RouterLink} from "@angular/router";
import {CommonModule} from "@angular/common";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CustomValidators} from "../../custom-validators/CustomValidators";


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    RouterLink, CommonModule, ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent  implements OnInit  {

  registerForm: FormGroup | undefined;
  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
   this.registerForm = this.formBuilder.group({
      name:['',Validators.required,Validators.minLength(3)],
      username:['',Validators.required,Validators.email],
      password :['',Validators.required,Validators.minLength(6),Validators.maxLength(40)],
      confirmPassword:['',Validators.required,Validators.minLength(6)]
    },{validators:CustomValidators.matchPasswordValidator});

  }


}
