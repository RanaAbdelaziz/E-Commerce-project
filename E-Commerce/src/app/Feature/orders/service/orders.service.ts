import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, find, first, map, mergeMap, mergeScan, mergeWith, of, switchMap } from 'rxjs';
import { ProductsService } from '../../products/services/products.service';
import { UsersService } from './users.service';


@Injectable()
export class OrdersService {
  orders = new BehaviorSubject<any[]>([]);
  products: any
  constructor(private http: HttpClient, private productsService: ProductsService,private userService:UsersService) {
    this.loadOrders().subscribe(res => {
      this.orders.next(res)
    })
  }

  loadOrders(): Observable<any> {
    return this.http.get('/assets/data/orders.json')
  }



  getOrdersList(): Observable<any> {
    return this.orders.pipe(map(res => res.map(order => ({
      id: order.OrderId,
      paymentMethod: order.PaymentType,
      date: order.OrderDate,
      totalPrice: this.getOrderTotalPrice(order.Products)
    })
    )))
  }

  private getOrderTotalPrice(orderProducts: any[]): number {
    let totalPrice = 0;
    let products = this.productsService.products.value
    orderProducts.forEach(product => {
      totalPrice += product.Quantity * products.find(e => e.ProductId == product.ProductId).ProductPrice
    });
    return totalPrice;
  }

  getOrderDetails(orderId:number):Observable<any>{
    return this.orders.asObservable().pipe(
      map(res => res.find(e => e.OrderId == orderId)),
      mergeMap(result => this.userService.getUserData(result.UserId).pipe(map(userData=>({...result,userData:userData})))),
      mergeMap(order =>this.productsService.products.pipe(map(products=>{
        if(order){
          var orderProducts:any[] = [];
          order.Products.forEach((e:any)=>{
            let product = products.find(x=>x.ProductId == e.ProductId);
            orderProducts.push({...e,Name:product.ProductName,Img:product.ProductImg,Price:e.Quantity*product.ProductPrice})
          });
          return {
            orderId:order.OrderId,
            date: order.OrderDate,
            userData:order.userData,
            products:orderProducts
          }
        }
        return null;
      }))),

    )
  }

}
