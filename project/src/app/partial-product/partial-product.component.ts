import { Component, OnInit, Input } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-partial-product',
  templateUrl: './partial-product.component.html',
  styleUrls: ['./partial-product.component.sass'] 
})
export class PartialProductComponent implements OnInit {
  @Input('product_id') product_id: string;
  info;

  constructor(private service_product: ProductService) {
  }

  ngOnInit() {
    this.info = this.service_product.GetProductInfo(this.product_id);
  }

  OnMouseEnter(event) {
    event.target.getElementsByClassName("product__img-menu")[0].style.display = "block";
  }

  OnMouseLeave(event) {
    event.target.getElementsByClassName("product__img-menu")[0].style.display = "none";
  }
}
