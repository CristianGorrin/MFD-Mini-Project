import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-collection',
  templateUrl: './part-collection.component.html',
  styleUrls: ['./part-collection.component.sass']
})
export class PartCollectionComponent implements OnInit {
  show_popup_menu = {
    sort_by: false,
    features: false,
    size: false,
    colour: false,
    price: false
  }

  collection = {
    data: [],
    total: 0,
    index_from: 0,
    index_to: 0
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

  constructor() { }

  ngOnInit() {
  }

  Render() {
    console.log(this);
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

    this.Render();
  }

  ToggelSortInverse(event) {
    this.sort_by_inverse = event.target.checked;
    this.Render();
  }

  UpdateFeatures(event) {
    this.ListUpdate(event.target.checked, event.target.value, this.features);
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

    this.Render();
  }

  UpdateColour(event) {
    this.ListUpdate(event.target.checked, event.target.value, this.colour);
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
}

enum Size { all, xs, s, m, l, xl, xxl };
enum SortBy { none, features, size, colour, price };
