//External imports
import { Component, OnInit } from '@angular/core';
//Internal imports
import { ApiHttpCallService } from '../shared/services/api-http-call.service';
@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements OnInit {
  public listData = []; //array value to store get data response
  public loadingIndicator = true;//loading bar display or not boolean value
  //column configuration fieldname,title name and column width (ngx-datatable)
  public columns = [{ prop: 'id', name:'id', width:20 }, {prop: 'title', name: 'Title', width:200 }, {prop: 'body', name: 'Body',width:400, sortable: false }];
  //ag-grid datatable column configuration
  public columnDefs = [{ field: 'id',sort: 'asc'},{ field: 'title' },{ field: 'body'}];
  //ag-grid grid settins configuration
  public gridSettings = {flex: 1,sortable: true,resizable: true,filter: true};

  constructor(private apiHttpCallService:ApiHttpCallService) { }

  ngOnInit(): void {
    this.getDataApiCall();
  }

  //this method is used for fetching get data 
  private getDataApiCall(){
    this.loadingIndicator = true;
    this.apiHttpCallService.getJsonDataList().subscribe(data => {
      this.listData = data; //assign value 
      this.loadingIndicator = false; //stop loading bar
    },(error)=>{
      this.loadingIndicator = false;
    });
  }
}
