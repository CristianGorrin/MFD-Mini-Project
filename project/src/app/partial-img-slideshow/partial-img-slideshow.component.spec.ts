import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialImgSlideshowComponent } from './partial-img-slideshow.component';

describe('PartialImgSlideshowComponent', () => {
  let component: PartialImgSlideshowComponent;
  let fixture: ComponentFixture<PartialImgSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialImgSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialImgSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
