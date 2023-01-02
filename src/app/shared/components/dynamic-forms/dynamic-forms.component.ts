//External imports
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.scss']
})

export class DynamicFormsComponent implements OnInit {
  @Input() fields: any = []; //variable is used for making dynamic fields accept json array of object
  @Input() buttonText: string = ''; //variable is used for displaying button text 
  @Input() sendFormData = {}; //variable is used for receiving data to parent and set in form 
  @Output() sendFormDataToParent: EventEmitter<any> = new EventEmitter(); //emit event is used for send form data to parent 
  public dynamicForm: FormGroup | any; //reactive form name 

  constructor() { }

  //this method is used for sending submitting form data value to parent it is object 
  public onSubmit() {
    this.sendFormDataToParent.emit(this.dynamicForm.value);
  }

  //this method is used for creating dynamic form control based on json configuation 
  public createFormControlDynamic() {
    const controls: any = {};
    this.fields?.forEach((res: any) => {
      const validationsArray: any = [];
      //loop is used for assign validation based on json configuration 
      res?.validations?.forEach((val: any) => {
        if (val.name === 'required') {
          validationsArray.push(Validators.required);
        } else if (val.name === 'pattern') {
          validationsArray.push(Validators.pattern(val.validator));
        } else if (val.name === 'minlength') {
          validationsArray.push(Validators.minLength(val.validator));
        }
      });
      //making form controls name 
      controls[res?.name] = new FormControl('', validationsArray);
    });
    this.dynamicForm = new FormGroup(controls);
    //set form value in update time 
    if (Object.keys(this.sendFormData).length !== 0) {
      this.dynamicForm.patchValue(this.sendFormData);
    }
  }

  ngOnInit(): void {
    this.createFormControlDynamic(); //calling function creating form control dynamically 
  }

}
