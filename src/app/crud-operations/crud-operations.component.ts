//External imports
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
//Internal imports
import { constants } from '../shared/constants/form-constant';
import { ApiHttpCallService } from '../shared/services/api-http-call.service';
@Component({
  selector: 'app-crud-operations',
  templateUrl: './crud-operations.component.html',
  styleUrls: ['./crud-operations.component.scss']
})
export class CrudOperationsComponent implements OnInit {
  @ViewChild('dialogOpen', { static: false })
  public dialogOpen: TemplateRef<any> | any; //variable is template ref for opeing dialog box
  public listData: any = []; //store array for getdata response
  public gridRefreshFlag: boolean = false; //grid refresh api boolean variable used for refresh new data
  public loadingIndicator = true; //loading bar boolean value
  //grid column configuration
  public columns = [
    { prop: 'name', name: 'Name', width: 200 },
    { prop: 'email', name: 'Email', width: 200 },
    { prop: 'body', name: 'Body', width: 400 },
    { prop: 'actions', name: 'Actions', sortable: false, width: 50 }];
  public screenMode = 'add'; //screen mode set (add/update)
  public fields:any = []; //store field json configuration
  public sendFormData: any = {}; //send data to children in update time
  public searchText: string = '';
  public searchField: string = 'email';
  constructor(private apiHttpCallService: ApiHttpCallService, private modalService: NgbModal, private toasterService: ToastrService) { }

  //this method is used for opeing dialog on add/edit button click
  public openModal(type: string) {
    this.screenMode = type; //set screen name 
    this.sendFormData = type === 'add' ? {} : this.sendFormData; //assign value 
    //dialog configuration
    this.modalService.open(this.dialogOpen, {
      size: 'md',
      backdrop: 'static',
      keyboard: false
    });
  }

  //this method is used for saving data on grid 
  public save(data: any) {
    if (this.screenMode === 'add') { //add time 
      //here call post api in live system
      data.id = (Math.floor(Math.random() * 1000)) + 10; //random id is generated 
      this.listData.push(data); //add value for list
      this.modalService.dismissAll(); //closed dialog event
      this.toasterService.success('Record added successfully'); //displaying message
      this.refreshGridData(); //refresh grid data (live system use get data api calling);
    } else { //edit time
      //loop is used for set new value in lookup those enter by user
      this.listData?.forEach((record: any) => {
        if (record?.id === Number(this.sendFormData?.id)) {
          record.email = data?.email;
          record.body = data?.body;
          record.name = data?.name;
        }
      });
      this.modalService.dismissAll();
      this.toasterService.success('Record updated successfully');
      this.refreshGridData();
    }
  }

  //this method is used for action received in child component (add/edit/remove)
  public actionReceived(rowDetails: any) {
    if (rowDetails.action === 'edit') {//update time
      this.openModal('update');
      this.sendFormData = rowDetails?.selectedRow;
    } else if (rowDetails.action === 'remove') { //delete time
      const index = this.listData.findIndex((obj: any) => obj.id === Number(rowDetails?.selectedRow?.id));
      if (index > -1) {
        this.listData.splice(index, 1); //find record base on id and delete that record in array
        this.toasterService.success('Record removed successfully');
        this.refreshGridData();
      }
    }
  }

  ngOnInit(): void {
    this.fields = constants.crudOperationForm; //assign form json value 
    this.getDataApiCall(); //fetching get data api called
  }

  //this method is used for calling get data api 
  private getDataApiCall() {
    this.loadingIndicator = true;
    this.gridRefreshFlag = true;
    this.apiHttpCallService.getCrudDataList().subscribe(data => {
      this.listData = data;
      this.loadingIndicator = false;
    }, (error) => {
      this.loadingIndicator = false;
    });
  }

  //this method is used for grid refresh in live system here used get api called
  private refreshGridData() {
    this.gridRefreshFlag = false;
    //live system never used set time out here api is not there so I am using set time without any delay
    setTimeout(() => {
      this.gridRefreshFlag = true;
    });
  }
}
