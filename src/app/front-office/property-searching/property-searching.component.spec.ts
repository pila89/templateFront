import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySearchingComponent } from './property-searching.component';

describe('PropertySearchingComponent', () => {
  let component: PropertySearchingComponent;
  let fixture: ComponentFixture<PropertySearchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySearchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
