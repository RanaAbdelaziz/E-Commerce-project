import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { SharedRoutingModule } from './shared-routing.module';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { TableModule } from 'primeng/table';
import { DataViewModule  } from 'primeng/dataview';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    CardModule,
    MenubarModule,
    TableModule,
    DataViewModule,
    FieldsetModule,




  ],
  exports:[
    CardModule,
    ButtonModule,
    MenubarModule,
    TableModule,
    DataViewModule,
    FieldsetModule,



  ]
})
export class SharedModule { }
