import { Component, OnInit } from '@angular/core';
import { ProductBean } from '../product-bean';
import { UserService } from '../user.service';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { ShippingBean } from '../shipping-bean';

// tslint:disable
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  displaySpinner: boolean = true;
  selectedProductList: ProductBean[];
  shippingBean = new ShippingBean();

  firstName: FormControl;
  lastName: FormControl;
  emailId: FormControl;
  address: FormControl;
  phone: FormControl;
  cardNo: FormControl;
  expDt: FormControl;
  cvv: FormControl;

  totalPrice = 0;
  totalQuantity = 0;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.saveCart();

    this.firstName = new FormControl(null, [Validators.required]);
    this.lastName = new FormControl(null, [Validators.required]);
    this.emailId = new FormControl(null, [Validators.required, Validators.email]);
    this.address = new FormControl(null, [Validators.required]);
    this.phone = new FormControl(null, [Validators.required]);
    this.cardNo = new FormControl(null, [Validators.required]);
    this.expDt = new FormControl(null, [Validators.required]);
    this.cvv = new FormControl(null, [Validators.required]);
  }

  saveCart() {
    this.route.queryParams.subscribe(params => {
      this.selectedProductList = JSON.parse(params["prodList"]);
      console.log(this.selectedProductList);
    });

    this.calculateTotalPrice();

    this.userService.addToCart(this.selectedProductList).subscribe(resp => {
      console.log("cart");
    });
  }

  calculateTotalPrice() {
    this.selectedProductList.forEach(entry => {
      this.totalQuantity = this.totalQuantity + entry.quantity
      this.totalPrice = this.totalPrice + (entry.quantity * entry.productPrice);
    });
  }

  order() {
    this.shippingBean.firstName = this.firstName.value;
    this.shippingBean.lastName = this.lastName.value;
    this.shippingBean.emailId = this.emailId.value;
    this.shippingBean.address = this.address.value;
    this.shippingBean.phone = this.phone.value;
    this.shippingBean.cardNo = this.cardNo.value;
    this.shippingBean.expDt = this.expDt.value;
    this.shippingBean.cvv = this.cvv.value;
    this.shippingBean.totalPrice = this.totalPrice;
    this.shippingBean.totalQuantity = this.totalQuantity

    let navigationExtras: NavigationExtras = {
      queryParams: {
        "shippingBean": JSON.stringify(this.shippingBean)
      }
    };

    this.router.navigate(['summary'], navigationExtras);
  }

  logout() {
    this.userService.logout().subscribe(resp => {
      this.router.navigate(['login']);
    });
  }

}
