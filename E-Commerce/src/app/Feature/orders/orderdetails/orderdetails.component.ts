import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../service/orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss']
})
export class OrderdetailsComponent implements OnInit {
  orderId!: number;
  order!: any;
  constructor(private ordersSerive: OrdersService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.orderId = +params['id'])
  }
  ngOnInit(): void {
    this.ordersSerive.getOrderDetails(this.orderId).subscribe(res => {
      this.order = res;
      console.log(res);

    })
  }

}
