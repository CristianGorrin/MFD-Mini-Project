import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartTopBrandsComponent } from './part-top-brands.component';

describe('PartTopBrandsComponent', () => {
  let component: PartTopBrandsComponent;
  let fixture: ComponentFixture<PartTopBrandsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartTopBrandsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartTopBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
