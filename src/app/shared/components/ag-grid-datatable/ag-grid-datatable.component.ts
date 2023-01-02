//External imports
import { Component, Input } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-datatable',
  templateUrl: './ag-grid-datatable.component.html',
  styleUrls: ['./ag-grid-datatable.component.scss']
})
export class AgGridDatatableComponent {
  @Input() columnDefs: ColDef[] | any; //cloumn array is used for make grid column
  @Input() rowData = []; //variable is used to assign array of object row value
  @Input() defaultColDef: ColDef | any; //variable is used for provide setting in grid like filter,sort etc...
  @Input() pagination:boolean = true; //variable is used for showing pagination
  @Input() paginationPageSize:number = 10; //variable is used for display 10 record per page inside grid
  
  constructor() { }

  //method is used for clicking row data
  public onRowClicked(event: any) { 
    console.log('row', event); 
  }

  //method is used for clicking cell
  public onCellClicked(event: any) { 
    console.log('cell', event); 
  }

  //method is used for selection changed event
  public onSelectionChanged(event: any) { 
    console.log("selection", event); 
  }

  //method is used for on grid ready 
  public onGridReady(event: any) { 
    console.log("grid ready", event); 
  }
}
