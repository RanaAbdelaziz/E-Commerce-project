import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ProductsService {

  constructor(private http : HttpClient) { }


  getProduts(): Observable<any> {
    return this.http.get("/assets/data/porducts.json");
   }


}
