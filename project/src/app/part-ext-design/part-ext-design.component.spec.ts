import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartExtDesignComponent } from './part-ext-design.component';

describe('PartExtDesignComponent', () => {
  let component: PartExtDesignComponent;
  let fixture: ComponentFixture<PartExtDesignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartExtDesignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartExtDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
