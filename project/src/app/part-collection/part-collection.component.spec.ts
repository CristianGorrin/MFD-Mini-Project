import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartCollectionComponent } from './part-collection.component';

describe('PartCollectionComponent', () => {
  let component: PartCollectionComponent;
  let fixture: ComponentFixture<PartCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
