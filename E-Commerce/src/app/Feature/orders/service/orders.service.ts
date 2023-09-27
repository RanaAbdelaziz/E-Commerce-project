import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { ProductsService } from '../../products/services/products.service';


@Injectable()
export class OrdersService {
  orders = new BehaviorSubject<any[]>([]);
 prooducts :any
  constructor(private http : HttpClient,private productsService:ProductsService) {
       this.loadOrders().subscribe(res=>{
        this.orders.next(res)
       })
   }

   loadOrders(): Observable<any>{
    return this.http.get('/assets/data/orders.json')
   }

   getOrdersList():Observable<any>{
     return this.orders.pipe(map(res=>res.map(order => ({
      id :  order.OrderId,
      paymentMethod : order.PaymentType,
      date : order.OrderDate,
      totalPrice: this.getOrderTotalPrice(order.Products)
     })
     )))


    }

    private getOrderTotalPrice(orderProducts:any[]):number{
      let totalPrice = 0;
      let products = this.productsService.products.value
      orderProducts.forEach(product => {
        totalPrice += product.Quantity * products.find(e=>e.ProductId == product.ProductId).ProductPrice
      });
        return totalPrice;
    }

}
