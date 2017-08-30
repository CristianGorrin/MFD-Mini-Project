import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part-opinion',
  templateUrl: './part-opinion.component.html',
  styleUrls: ['./part-opinion.component.sass']
})
export class PartOpinionComponent implements OnInit {
  data = [
    { 
      img: 'assets/img/opinion/face.png',
      name: '0The name',
      text: '0Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      selected: false
    },
    { 
      img: 'assets/img/opinion/face.png',
      name: '1The name',
      text: '1Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
      selected: true
    },
    { 
      img: 'assets/img/opinion/face.png',
      name: '2The name',
      text: '2Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
      selected: false
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  Click(event) {
    let target_array = event.target.parentElement.children;
    for (var index = 0; index < target_array.length; index++) {
      if (target_array[index] == event.target) {
        this.data[index].selected = true;
      } else {
        this.data[index].selected = false;
      }
    }
  }
}
