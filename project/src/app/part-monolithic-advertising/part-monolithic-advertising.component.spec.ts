import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartMonolithicAdvertisingComponent } from './part-monolithic-advertising.component';

describe('PartMonolithicAdvertisingComponent', () => {
  let component: PartMonolithicAdvertisingComponent;
  let fixture: ComponentFixture<PartMonolithicAdvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartMonolithicAdvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartMonolithicAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
