import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ProductsRoutingModule } from './Feature/products/products-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ProductsService } from './Feature/products/services/products.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptor } from './core/interceptor/loading.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CoreModule,
    NgxSpinnerModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [{multi:true,provide:HTTP_INTERCEPTORS,useClass:LoadingInterceptor}],
  bootstrap: [AppComponent]
})
export class AppModule { }
