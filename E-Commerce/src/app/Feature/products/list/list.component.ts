import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
     products : any
  constructor(private productService : ProductsService){

    this.productService.products.subscribe(res=>{
      this.products =res
      console.log("res", this.products)
    })


  }
}
