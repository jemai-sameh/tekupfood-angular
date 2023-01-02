import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeliveryManComponent } from './list-delivery-man.component';

describe('ListDeliveryManComponent', () => {
  let component: ListDeliveryManComponent;
  let fixture: ComponentFixture<ListDeliveryManComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeliveryManComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeliveryManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
