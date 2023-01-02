import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridDatatableComponent } from './ag-grid-datatable.component';

describe('AgGridDatatableComponent', () => {
  let component: AgGridDatatableComponent;
  let fixture: ComponentFixture<AgGridDatatableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridDatatableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgGridDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
