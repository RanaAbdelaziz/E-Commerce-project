import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ListComponent } from './list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ProductsRoutingModule,
    SharedModule,
  ],
  providers:[
    ProductsService
  ]
})
export class ProductsModule { }
