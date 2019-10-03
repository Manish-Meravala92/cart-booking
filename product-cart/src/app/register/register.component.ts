import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

// tslint:disable
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  firstName: FormControl;
  lastName: FormControl;
  emailId: FormControl;
  password: FormControl;
  pwdConfirm: FormControl;

  constructor(private router: Router) { }

  ngOnInit() {
    this.firstName = new FormControl(null, [Validators.required]);
    this.lastName = new FormControl(null, [Validators.required]);
    this.emailId = new FormControl(null, [Validators.required, Validators.email]);
    this.password = new FormControl(null, [Validators.required,Validators.minLength(4),Validators.maxLength(10)]);
    this.pwdConfirm = new FormControl(null, [Validators.required,Validators.minLength(4),Validators.maxLength(10)]);
  }

  onRegister() {
    this.router.navigate(['list', { firstName: this.firstName.value, lastName: this.lastName.value, emailId: this.emailId.value, password: this.password.value, pwdConfirm: this.pwdConfirm.value, isLogin: false }],{ skipLocationChange: true });
  }

}
