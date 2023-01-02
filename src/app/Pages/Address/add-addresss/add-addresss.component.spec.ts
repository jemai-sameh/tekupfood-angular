import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAddresssComponent } from './add-addresss.component';

describe('AddAddresssComponent', () => {
  let component: AddAddresssComponent;
  let fixture: ComponentFixture<AddAddresssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAddresssComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAddresssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
