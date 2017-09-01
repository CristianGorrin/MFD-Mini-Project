import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartMonolithicAdvertisingSmallComponent } from './part-monolithic-advertising-small.component';

describe('PartMonolithicAdvertisingSmallComponent', () => {
  let component: PartMonolithicAdvertisingSmallComponent;
  let fixture: ComponentFixture<PartMonolithicAdvertisingSmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartMonolithicAdvertisingSmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartMonolithicAdvertisingSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
