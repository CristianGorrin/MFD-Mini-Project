import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ProductService } from '../product.service';

@Component({
  selector: 'app-page-product',
  templateUrl: './page-product.component.html',
  styleUrls: ['./page-product.component.sass']
})
export class PageProductComponent implements OnInit {
  product;

  constructor(private route: ActivatedRoute, private service_product: ProductService) {
    let temp = parseInt(this.route.snapshot.paramMap.get('id'));
    if (typeof temp == 'number') {
      this.product = this.service_product.GetProductInfoAll(temp);

      if (this.product == null) {
        this.HandleInvalid();
      }
    } else {
      this.HandleInvalid();
    }
  }

 

  ngOnInit() {
  }

  HandleInvalid() {
    this.product.product_id = -1;
    //TODO handle invalid url
  }
}
