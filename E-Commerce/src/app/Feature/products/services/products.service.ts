import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class ProductsService {
  products = new BehaviorSubject<any[]>([])
  constructor(private http : HttpClient) {
    this.getProduts().subscribe(res=>
      this.products.next(res)
      )
  }


  getProduts(): Observable<any> {
    return this.http.get("/assets/data/porducts.json");
   }

   getProductsList()
  {
    return of(this.products);
  }

}
