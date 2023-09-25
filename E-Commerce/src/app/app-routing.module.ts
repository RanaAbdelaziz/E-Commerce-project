import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
  path: 'products',
  loadChildren: () => import('./Feature/products/products.module').then(m => m.ProductsModule)
  },

 {
  path: 'orders',
    loadChildren: () => import('./Feature/orders/orders.module').then(m => m.OrdersModule)
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
