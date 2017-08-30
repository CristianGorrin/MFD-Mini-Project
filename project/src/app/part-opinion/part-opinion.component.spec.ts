import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOpinionComponent } from './part-opinion.component';

describe('PartOpinionComponent', () => {
  let component: PartOpinionComponent;
  let fixture: ComponentFixture<PartOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
