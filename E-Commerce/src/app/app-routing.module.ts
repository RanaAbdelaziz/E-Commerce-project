import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersModule } from './Feature/orders/orders.module';

const routes: Routes = [
  {
    path: 'Products',
    loadChildren: () => import('./Feature/products/products.module').then(m => m.ProductsModule)
  },
  {
    path : 'Orders',
    loadChildren:()=> import('./Feature/orders/orders.module').then(m=>OrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
