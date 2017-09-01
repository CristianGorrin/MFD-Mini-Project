import { Component, OnInit } from '@angular/core';
import { Size, SortBy } from '../enums';
import { ProductService } from '../product.service';

const max_items: number = 12;

@Component({
  selector: 'app-part-collection',
  templateUrl: './part-collection.component.html',
  styleUrls: ['./part-collection.component.sass']
})
export class PartCollectionComponent implements OnInit {  
  flag_update_collection = true;

  show_popup_menu = {
    sort_by: false,
    features: false,
    size: false,
    colour: false,
    price: false
  }

  collection = {
    data: [],
    output_buffer: [],
    index_page: 0,
    index_from: 0,
    index_to: 0,
    total_items: 0,
    total_page: []
  }
  sort_by: SortBy = SortBy.none;
  sort_by_inverse = false;
  features = [];
  size: Size = Size.all;
  colour = [];
  price = {
    max: 9999,
    min: 1
  };

  constructor(private service_product: ProductService) {
    this.Render();
  }

  ngOnInit() {
  }

  Render() {
    if (this.flag_update_collection) {
      this.SetCollection();
      this.flag_update_collection = false;

      let page = parseInt((this.collection.data.length / max_items).toString())
      if (this.collection.data.length % max_items > 0) {
        page++;
      }

      for (var index = 1; index <= page; index++) {
        this.collection.total_page.push(index);
      }
    }

    this.collection.output_buffer = [];

    let offset = this.collection.index_page * max_items;
    for (var i = 0; i < max_items; i++) {
      let item_offset = i + offset;
      if (typeof this.collection.data[item_offset] == 'undefined') continue;

      this.collection.output_buffer[i] = this.collection.data[item_offset];
    }

    this.collection.total_items = this.collection.data.length;
    this.collection.index_from = offset + 1;
    if (this.collection.output_buffer.length != max_items) {
      this.collection.index_to = this.collection.data.length

      for (var i = this.collection.output_buffer.length; i < max_items; i++) {
        this.collection.output_buffer[i] = null;
      }
    } else {
      this.collection.index_to = offset + this.collection.output_buffer.length;
    }
  }

  SetCollection() {
    this.collection = {
      data: this.service_product.GetNewCollection(
        this.sort_by, 
        this.sort_by_inverse, 
        this.features, 
        this.size, 
        this.colour, 
        this.price.min, 
        this.price.max
      ),
      output_buffer: [],
      index_page: 0,
      index_from: 0,
      index_to: 0,
      total_items: 0,
      total_page: []
    }
  }

  SetAll(object, value: boolean) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        object[key] = value;
      }
    }
  }

  ListUpdate(add: boolean, value: string, list: Array<string>) {
    if (add) {
      list.push(value);
    } else {
      for (var index = 0; index < list.length; index++) {
        if (list[index] == value) {
          list.splice(index, 1);
          break;
        }
      }
    }
  }

  UpdateMin(event) {
    let temp = parseInt(event.target.value);
    if (Number.isInteger(temp)) {
      this.price.min = temp;

      if (this.price.min >= this.price.max) {
        this.price.max = this.price.min;
        
        let target_array = event.target.parentElement.parentElement.children;
        let done = false;
        for (var i = 0; i < target_array.length; i++) {
          for (var j = 0; j < target_array[i].children.length; j++) {
            if (target_array[i].children[j].id == 'price-max') {
              done = true;
              target_array[i].children[j].value = this.price.min;
              break;
            }
            if (done) break;
          }
        }
      }
    } 
    
    event.target.value = this.price.min;

    this.flag_update_collection = true;
    this.Render();
  }

  UpdateMax(event) {
    let temp = parseInt(event.target.value);
    if (Number.isInteger(temp)) {
      this.price.max = temp;

      if (this.price.min >= this.price.max) {
        this.price.min = this.price.max;
        
        let target_array = event.target.parentElement.parentElement.children;
        let done = false;
        for (var i = 0; i < target_array.length; i++) {
          for (var j = 0; j < target_array[i].children.length; j++) {
            if (target_array[i].children[j].id == 'price-min') {
              done = true;
              target_array[i].children[j].value = this.price.max;
              break;
            }

            if (done) break;
          }
        }
      }
    } 

    event.target.value = this.price.max;

    this.flag_update_collection = true;
    this.Render();
  }

  UpdateSort(event) {
    switch (event.target.id) {
      case 'sort_by_features':
        this.sort_by = SortBy.features;
        break;
      case 'sort_by_size':
        this.sort_by = SortBy.size;
        break;
      case 'sort_by_colour':
        this.sort_by = SortBy.colour;
        break;
      case 'sort_by_price':
        this.sort_by = SortBy.price;
        break;
      default:
        console.log('!!! UpdateSort default !!!');
        this.sort_by = SortBy.none;
    }

    this.flag_update_collection = true;
    this.Render();
  }

  ToggelSortInverse(event) {
    this.sort_by_inverse = event.target.checked;
    this.flag_update_collection = true;
    this.Render();
  }

  UpdateFeatures(event) {
    this.ListUpdate(event.target.checked, event.target.value, this.features);
    this.flag_update_collection = true;
    this.Render();
  }

  UpdateSize(event) {
    switch (event.target.value) {
      case 'all':
        this.size = Size.all;
        break;
      case 'xs':
        this.size = Size.xs;
        break;
      case 's':
        this.size = Size.s;
        break;
      case 'm':
        this.size = Size.m;
        break;
      case 'l':
        this.size = Size.l;
        break;
      case 'xl':
        this.size = Size.xl;
        break;
      case 'xxl':
        this.size = Size.xxl;
        break;
      default:
        this.size = Size.all;
        console.log('!!! UpdateSize default !!!');
        break;
    }

    this.flag_update_collection = true;
    this.Render();
  }

  UpdateColour(event) {
    this.ListUpdate(event.target.checked, event.target.value, this.colour);
    this.flag_update_collection = true;
    this.Render();
  }

  OpenPopupMenu(event) {
    let temp;
    switch (event.target.id) {
      case 'menu-sort-by':
        temp = !this.show_popup_menu.sort_by;
        this.SetAll(this.show_popup_menu, false);
        this.show_popup_menu.sort_by = temp;
        break;
      case 'menu-features':
        temp = !this.show_popup_menu.features;
        this.SetAll(this.show_popup_menu, false);
        this.show_popup_menu.features = temp;
        break;
      case 'menu-size':
        temp = !this.show_popup_menu.size;
        this.SetAll(this.show_popup_menu, false);
        this.show_popup_menu.size = temp;
        break;
      case 'menu-colour':
        temp = !this.show_popup_menu.colour;
        this.SetAll(this.show_popup_menu, false);
        this.show_popup_menu.colour = temp;
        break;
      case 'menu-price':
        temp = !this.show_popup_menu.price;
        this.SetAll(this.show_popup_menu, false);
        this.show_popup_menu.price = temp;
        break;
      default:
        console.log('!!! OpenPopupMenu default !!!');
        this.SetAll(this.show_popup_menu, false);
        return;
    }
  }

  ClosePopmenus() {
    this.SetAll(this.show_popup_menu, false);
  }

  ClickPageNumber(event) {
    let page = parseInt(event.target.id.split('_')[1]) - 1;

    if (page == this.collection.index_page) return;

    this.collection.index_page = page;
    this.Render();

    event.target.parentElement.parentElement.parentElement.scrollIntoView();
  }
}
