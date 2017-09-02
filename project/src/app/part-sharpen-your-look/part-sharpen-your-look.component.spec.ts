import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartSharpenYourLookComponent } from './part-sharpen-your-look.component';

describe('PartSharpenYourLookComponent', () => {
  let component: PartSharpenYourLookComponent;
  let fixture: ComponentFixture<PartSharpenYourLookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartSharpenYourLookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartSharpenYourLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
