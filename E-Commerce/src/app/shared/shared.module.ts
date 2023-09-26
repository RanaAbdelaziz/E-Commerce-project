import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { SharedRoutingModule } from './shared-routing.module';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CardModule,
  ],
  exports:[
    CardModule,
    ButtonModule,
  ]
})
export class SharedModule { }
