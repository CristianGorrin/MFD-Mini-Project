import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-part-product-single',
  templateUrl: './part-product-single.component.html',
  styleUrls: ['./part-product-single.component.sass']
})
export class PartProductSingleComponent implements OnInit {
  @Input('product-id') product_id;

  constructor() { }

  ngOnInit() {
    console.log(this.product_id);
  }
}
