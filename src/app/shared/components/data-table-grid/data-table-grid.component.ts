//External imports
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-table-grid',
  templateUrl: './data-table-grid.component.html',
  styleUrls: ['./data-table-grid.component.scss']
})
export class DataTableGridComponent {
  @Input() rows = []; //variable is used to assign array of object row value 
  @Input() limit:number = 10; //variable is used for display 10 record per page inside grid 
  @Input() columns:any = []; //cloumn array is used for make grid column
  @Input() reorderable:boolean = false; //variable is used for column sequence changes 
  @Input() loadingIndicator: boolean = false; //variable is used for showing loading bar
  @Input() searchText:string = '';//variable is used for received search text
  @Input() searchField:string = '';//variable is used for received search field 
  @Input() scrollbarH:boolean = true;//variable is used for horizontal scroll bar 
  @Output() actionEvent: EventEmitter<any> = new EventEmitter(); //variable is for emitting value to parent on grid action column

  constructor() { }

  //method is used for send selected row value to parent and action type (edit/delete)
  public actionType(selectedRow:any,type:string) {
    this.actionEvent.emit({selectedRow:selectedRow,action:type});
  }

}
