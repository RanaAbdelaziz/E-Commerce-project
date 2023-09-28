import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrdersService } from './service/orders.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';


@NgModule({
  declarations: [
    OrderlistComponent,
    OrderdetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OrdersRoutingModule,
    SharedModule
  ],
  providers: [
    OrdersService
  ]
})
export class OrdersModule { }
