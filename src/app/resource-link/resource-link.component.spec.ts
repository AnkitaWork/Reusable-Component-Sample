import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceLinkComponent } from './resource-link.component';

describe('ResourceLinkComponent', () => {
  let component: ResourceLinkComponent;
  let fixture: ComponentFixture<ResourceLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResourceLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourceLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
