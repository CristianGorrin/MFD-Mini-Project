import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartAdvertisingComponent } from './part-advertising.component';

describe('PartAdvertisingComponent', () => {
  let component: PartAdvertisingComponent;
  let fixture: ComponentFixture<PartAdvertisingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartAdvertisingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartAdvertisingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
