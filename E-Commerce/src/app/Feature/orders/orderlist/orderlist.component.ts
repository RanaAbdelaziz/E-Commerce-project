import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../service/orders.service';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.scss']
})
export class OrderlistComponent implements OnInit {
  orders :  any
  constructor(private orderservice : OrdersService){

  }

  ngOnInit(){
    this.getOrders()
   }

  getOrders(){
    this.orderservice.getOrdersList().subscribe(res=>{
      this.orders =res
      console.log("this.orders", this.orders)

    });


  }

}
