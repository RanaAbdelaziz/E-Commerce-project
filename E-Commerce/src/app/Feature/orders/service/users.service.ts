import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users = new BehaviorSubject<any[]>([])

  constructor(private http:HttpClient) {
    this.getUsers().subscribe(res=>{
      this.users.next(res)
     })
  }

  getUsers():Observable<any[]>{
    return this.http.get<any[]>('/assets/data/users.json')
   }

   getUserData(userId:any) {
    return this.users.value.find(e=>e.Id==userId);
  }

}
