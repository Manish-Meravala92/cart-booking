import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

// tslint:disable
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  value: string;
  emailId:FormControl;
  password:FormControl;
	constructor(private router: Router) { }

	ngOnInit() {
    this.emailId = new FormControl(null, [Validators.required,Validators.email]);
		this.password = new FormControl(null, [Validators.required]); 
	}


	onSubmit() {

		this.router.navigate(['list', { emailId: this.emailId.value, password: this.password.value, isLogin:true }], { skipLocationChange: true });
	}

}
