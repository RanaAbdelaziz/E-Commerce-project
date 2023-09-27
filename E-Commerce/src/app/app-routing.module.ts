import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './core/components/main-layout/main-layout.component';

const routes: Routes = [

  {
    path:'',
    component:MainLayoutComponent,
    children:[
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
     },
     {
      path:'my-cart',
      loadChildren:()=>import('./Feature/cart/cart.module').then(m=>m.CartModule)
     }
    ]

  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
