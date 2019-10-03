import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SummaryComponent } from './summary/summary.component';

// tslint:disable
const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
	path:'login',
	component:LoginComponent
  },
  {
	path:'register',
	component:RegisterComponent
  },
   {
	path:'list',
	component:ListComponent
  },
  {
	path:'checkout',
	component:CheckoutComponent
  },
  {
	path:'summary',
	component:SummaryComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
