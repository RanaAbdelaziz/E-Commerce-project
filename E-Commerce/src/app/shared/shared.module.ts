import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { SharedRoutingModule } from './shared-routing.module';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CardModule,
    MenubarModule,
    
  ],
  exports:[
    CardModule,
    ButtonModule,
    MenubarModule,

  ]
})
export class SharedModule { }
