import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-part-product-single',
  templateUrl: './part-product-single.component.html',
  styleUrls: ['./part-product-single.component.sass']
})
export class PartProductSingleComponent implements OnInit {
  @Input('product-id') product_id;
  data;
  show = {
    description: true,
    brand: false,
    info: false
  }

  constructor(private service_product: ProductService) {
    this.data = this.service_product.GetProductInfoAll(this.product_id);
  }

  ngOnInit() {
    console.log(this.product_id);
  }

  ShowReset() {
    for (var key in this.show) {
      if (this.show.hasOwnProperty(key)) {
        this.show[key] = false;
      }
    }
  }

  ShowDescription() {
    this.ShowReset();
    this.show.description = true;
  }

  ShowBrand() {
    this.ShowReset();
    this.show.brand = true;
  }

  ShowInfo() {
    this.ShowReset();
    this.show.info = true;
  }
}
