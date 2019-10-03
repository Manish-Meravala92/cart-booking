import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

// tslint:disable-next-line: max-line-length
import { MatDatepickerModule, MatNativeDateModule, MatExpansionModule, MatProgressSpinnerModule, MatDividerModule } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RegisterComponent } from './register/register.component';
import { UserService } from './user.service';
import { ListComponent } from './list/list.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MatCardModule } from '@angular/material/card';
import { CheckoutComponent } from './checkout/checkout.component';
import { SummaryComponent } from './summary/summary.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

// tslint:disable
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent, RegisterComponent, ListComponent, SpinnerComponent, CheckoutComponent, SummaryComponent  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CommonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatCardModule,
    MatSnackBarModule 
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
