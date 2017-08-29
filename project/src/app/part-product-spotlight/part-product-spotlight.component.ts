import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-part-product-spotlight',
  templateUrl: './part-product-spotlight.component.html',
  styleUrls: ['./part-product-spotlight.component.sass']
})
export class PartProductSpotlightComponent implements OnInit {
  show = {
    new: true,
    top: false,
    featurid: false
  }
  products;

  constructor(private service_product: ProductService) { 
    this.products = this.service_product.GetSpotlightList();
  }

  ngOnInit() {
  }

  ClickNew() {
    this.show.new = true;
    this.show.top = false;
    this.show.featurid = false;
  }

  ClickTop() {
    this.show.new = false;
    this.show.top = true;
    this.show.featurid = false;
  }

  ClickFeaturid() {
    this.show.new = false;
    this.show.top = false;
    this.show.featurid = true;
  }
}
