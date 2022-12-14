import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPayementComponent } from './add-payement.component';

describe('AddPayementComponent', () => {
  let component: AddPayementComponent;
  let fixture: ComponentFixture<AddPayementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPayementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPayementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
