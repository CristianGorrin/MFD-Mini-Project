import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialFooterComponent } from './partial-footer.component';

describe('PartialFooterComponent', () => {
  let component: PartialFooterComponent;
  let fixture: ComponentFixture<PartialFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
