//External imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AgGridModule } from 'ag-grid-angular';
//Internal imports
import { DynamicFormsComponent } from './components/dynamic-forms/dynamic-forms.component';
import { DataTableGridComponent } from './components/data-table-grid/data-table-grid.component';
import { DataFilterPipe } from './pipes/datafilterpipe';
import { AgGridDatatableComponent } from './components/ag-grid-datatable/ag-grid-datatable.component';
@NgModule({
  declarations: [
    DynamicFormsComponent,
    DataTableGridComponent,
    DataFilterPipe,
    AgGridDatatableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgxSpinnerModule,
    AgGridModule
  ],
  exports:[
    DataTableGridComponent,
    DynamicFormsComponent,
    NgxDatatableModule,
    NgxSpinnerModule,
    AgGridDatatableComponent,
    DataFilterPipe,
    AgGridModule
  ]
})
export class SharedModule { }
