import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartProductSingleComponent } from './part-product-single.component';

describe('PartProductSingleComponent', () => {
  let component: PartProductSingleComponent;
  let fixture: ComponentFixture<PartProductSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartProductSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartProductSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
