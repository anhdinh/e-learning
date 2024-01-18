import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";
import {LocalStorageKeys} from "../../constants/LocalStorageKeys";


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy {

  loading = false;

  private timeoutId: any;

  loginForm: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private authenticationService: AuthenticationService, private formBuilder: FormBuilder,private router:Router) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.loginForm.valid) {
      this.loading = true;
      this.timeoutId = setTimeout(() => {
        this.authenticationService.login(this.loginForm.value).subscribe(
          data => {
            this.loading = false;
            this.authenticationService.saveUserInfoToStorage(data.jwtToken,data.refreshToken,data.username,data.roles);
            this.router.navigate(["/"]);
          },
          error => {
            this.loading = false;
            if (error.status === 401) {
              alert("The username or password is not correct.");
            }
          })
      }, 2000);
    }else {
      alert("The username must be an email, and the password must have at \n least six characters, and both must not be empty!!")
    }
  }

  ngOnDestroy() {
    clearTimeout(this.timeoutId);
  }
}
