import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';
import { ShippingBean } from '../shipping-bean';
import { ProductBean } from '../product-bean';

// tslint:disable
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  shippingBean: ShippingBean;
  displaySpinner: boolean = true;
  prodList: ProductBean[] = []
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParams.subscribe(params => {
      this.shippingBean = JSON.parse(params["shippingBean"]);
      console.log(this.shippingBean);
    });

    this.finalBooking();
  }

  finalBooking() {
    this.userService.finalBooking(this.shippingBean).subscribe(resp => {
      this.prodList = resp;
      console.log(this.prodList);
      this.displaySpinner = false;
    });
  }

}
