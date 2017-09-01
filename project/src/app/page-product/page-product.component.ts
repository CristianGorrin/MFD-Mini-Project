import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.sass']
})
export class PageProductComponent implements OnInit {
  product = {
    product_id: -1,
    slideshow: [
      { img: 'assets/img/products/08648e86abed326b602297df27b84759.png', alt: 'alt' },
      { img: 'assets/img/products/75bf5d36604cd2f18ab49a216910c4a0.png', alt: 'alt' },
      { img: 'assets/img/products/3fb5596ebdb8eafad1fc9d5410fd89d0.png', alt: 'alt' }
    ]
  }

  constructor(private route: ActivatedRoute) {
    let temp = parseInt(this.route.snapshot.paramMap.get('id'));
    if (typeof temp == 'number') {
      this.product.product_id = temp;
    } else {
      this.product.product_id = -1;
      //TODO handle invalid url
    }
  }

  ngOnInit() {
  }

  GetSlideshow() {
    return this.product.slideshow;
  }
}
