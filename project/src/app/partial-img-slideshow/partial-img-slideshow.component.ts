import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-partial-img-slideshow',
  templateUrl: './partial-img-slideshow.component.html',
  styleUrls: ['./partial-img-slideshow.component.sass']
})
export class PartialImgSlideshowComponent implements OnInit {
  @Input('urls') data: any;
  selected_index = -1;

  constructor() { }

  ngOnInit() {
    if ((typeof this.data[0]).toString() != "undefined") {
      this.selected_index = 0;
    }
  }

  ClickImg(event) {
    for (var i = 0; i < event.target.parentElement.children.length; i++) {
      if (event.target.parentElement.children[i] == event.target) {
        this.selected_index = i;
      }
    }
  }

  ClickNext() {
    if (this.selected_index >= this.data.length - 1) {
      this.selected_index = 0;
    } else {
      this.selected_index++;
    }
  }

  ClickPrevious() {
    if (this.selected_index <= 0) {
      this.selected_index = this.data.length - 1;
    } else {
      this.selected_index--;
    }
  }
}
