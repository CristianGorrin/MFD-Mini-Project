import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartNewsletterComponent } from './part-newsletter.component';

describe('PartNewsletterComponent', () => {
  let component: PartNewsletterComponent;
  let fixture: ComponentFixture<PartNewsletterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartNewsletterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartNewsletterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
