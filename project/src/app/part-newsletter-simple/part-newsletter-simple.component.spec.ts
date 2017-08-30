import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartNewsletterSimpleComponent } from './part-newsletter-simple.component';

describe('PartNewsletterSimpleComponent', () => {
  let component: PartNewsletterSimpleComponent;
  let fixture: ComponentFixture<PartNewsletterSimpleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartNewsletterSimpleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartNewsletterSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
