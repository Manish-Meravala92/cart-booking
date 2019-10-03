import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { UserService } from '../user.service';
import { UserBean } from '../user-bean';
import { ProductBean } from '../product-bean';
import { MatSnackBar } from '@angular/material/snack-bar';

// tslint:disable
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  productList: ProductBean[];
  displaySpinner: boolean = true;
  noResults: boolean = true;
  userinfo: UserBean;
  isLogin: string;
  selectedProductList: ProductBean[] = [];
  addMsg = "Product added to the cart";
  removeMsg = "Product removed from the cart"
  action = "DONE";

  constructor(private userService: UserService, private route: ActivatedRoute, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {

    this.list();
  }

  list(): void {

    this.isLogin = this.route.snapshot.paramMap.get('isLogin');
    this.userinfo = new UserBean;
    this.userinfo.emailId = this.route.snapshot.paramMap.get('emailId');
    this.userinfo.password = this.route.snapshot.paramMap.get('password');

    if (this.isLogin == 'false') {
      this.userinfo.firstName = this.route.snapshot.paramMap.get('firstName');
      this.userinfo.lastName = this.route.snapshot.paramMap.get('lastName');
      this.userinfo.pwdConfirm = this.route.snapshot.paramMap.get('pwdConfirm');

      this.userService.registerUser(this.userinfo).subscribe(resp => {
        this.productList = resp;
        this.displaySpinner = false;
        console.log(this.productList);
        if (this.productList.length == 0) {
          this.noResults = false;
        }
      });
    } else {
      this.userService.loginUser(this.userinfo).subscribe(resp => {
        this.productList = resp;
        this.displaySpinner = false;
        console.log(this.productList);
        if (this.productList.length == 0) {
          this.noResults = false;
        }
      });
    }
  }

  addToCart(product: ProductBean): void {
    product.quantity = product.quantity + 1;
    this.selectedProductList.push(product);
    this.snackBar.open(this.addMsg, this.action, {
      duration: 2000,
    });
  }

  removeFromCart(product: ProductBean): void {
    if (product.quantity > 0) {
      this.selectedProductList = this.selectedProductList.filter(prod => prod.productId !== product.productId);
    }
    product.quantity = product.quantity - 1;
    this.snackBar.open(this.removeMsg, this.action, {
      duration: 2000,
    });
  }

  isCartEmpty(product: ProductBean): boolean {

    if (product != null && product.quantity > 0) {
      return true;
    }
    return false;
  }

  readyToCheckout(): boolean {

    if (this.selectedProductList != null && this.selectedProductList.length > 0) {
      return true;
    }
    return false;
  }

  proceedToCheckout() {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "prodList": JSON.stringify(this.selectedProductList)
      }
    };
    this.router.navigate(['checkout'], navigationExtras);
  }

  logout() {
    this.userService.logout().subscribe(resp => {
      this.router.navigate(['login']);
    });
  }

}
