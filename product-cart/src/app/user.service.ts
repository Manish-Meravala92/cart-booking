import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserBean } from './user-bean';
import { ProductBean } from './product-bean';
import { ShippingBean } from './shipping-bean';

// tslint:disable
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private loginUrl = '/api/login';
  private orderUrl = '/api/order';
  private registerUrl = '/api/register';
  private cartUrl = '/api/cart';
  private logoutUrl = '/api/logout';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  registerUser(user: UserBean): Observable<ProductBean[]> {
    return this.http.post<ProductBean[]>(this.registerUrl, user, this.httpOptions);
  }

  loginUser(user: UserBean): Observable<ProductBean[]> {
    return this.http.post<ProductBean[]>(this.loginUrl, user, this.httpOptions);
  }

  addToCart(prodList: ProductBean[]): Observable<Object> {
    return this.http.post<Object>(this.cartUrl, prodList, this.httpOptions);
  }

  finalBooking(shippingBean: ShippingBean): Observable<ProductBean[]> {
    return this.http.post<ProductBean[]>(this.orderUrl, shippingBean, this.httpOptions);
  }

  logout(): Observable<Object> {
    return this.http.get<Object>(this.logoutUrl, this.httpOptions);
  }
}
