import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';


@NgModule({
  declarations: [
    NavbarComponent,
    MainLayoutComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports:[
  ]
})
export class CoreModule { }
