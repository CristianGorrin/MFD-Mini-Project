/* !!! This file only contains hardcode values - this is only intent for development !!! */
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  //Img 27:40
  GetProductInfo(id) {
    let result;
    switch (id % 3) {
      case 0:
        result = {
          id: -1,
          prices: 200.2,
          currency: '$',
          on_sale: false,
          img: 'assets/img/products/75bf5d36604cd2f18ab49a216910c4a0.png',
          description: 'This is clothes of some kind'
        };
        break;
      case 1:
        result = {
          id: -1,
          prices: 111.11,
          currency: '$',
          on_sale: true,
          img: 'assets/img/products/08648e86abed326b602297df27b84759.png',
          description: 'This is clothes of some kind - new'
        };
        break;
      case 2:
        result = {
          id: -1,
          prices: 59.11,
          currency: '$',
          on_sale: false,
          img: 'assets/img/products/3fb5596ebdb8eafad1fc9d5410fd89d0.png',
          description: 'This is clothes of some kind - new'
        }
        break;
      default:
        console.log('!!! GetProductInfo defaults !!!');
        result = {
          id: -1,
          prices: 200.2,
          currency: '$',
          on_sale: false,
          img: 'assets/img/products/75bf5d36604cd2f18ab49a216910c4a0.png',
          description: 'This is clothes of some kind'
        };
        break;
    }

    result.id = id;
    return result;
  }

  GetSpotlightList() {
    return {
      new: [1, 2, 3, 4],
      top: [2, 3, 4, 1],
      featured: [3, 4, 5, 10]
    }
  }
}
