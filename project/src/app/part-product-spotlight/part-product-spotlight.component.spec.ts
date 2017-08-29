import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartProductSpotlightComponent } from './part-product-spotlight.component';

describe('PartProductSpotlightComponent', () => {
  let component: PartProductSpotlightComponent;
  let fixture: ComponentFixture<PartProductSpotlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartProductSpotlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartProductSpotlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
