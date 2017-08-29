import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialProductComponent } from './partial-product.component';

describe('PartialProductComponent', () => {
  let component: PartialProductComponent;
  let fixture: ComponentFixture<PartialProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
