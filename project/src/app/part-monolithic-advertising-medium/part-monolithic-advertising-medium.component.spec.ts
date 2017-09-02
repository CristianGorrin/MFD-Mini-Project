import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartMonolithicAdvertisingMediumComponent } from './part-monolithic-advertising-medium.component';

describe('PartMonolithicAdvertisingMediumComponent', () => {
  let component: PartMonolithicAdvertisingMediumComponent;
  let fixture: ComponentFixture<PartMonolithicAdvertisingMediumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartMonolithicAdvertisingMediumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartMonolithicAdvertisingMediumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
