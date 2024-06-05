import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-one',
  templateUrl: './collection-one.component.html',
  styleUrls: ['./collection-one.component.css'],
})
export class CollectionOneComponent implements OnInit {
  rings = [
    {
      image: 'https://source.unsplash.com/featured/?ring&sig=1',
      title: 'Beautiful Handmade Ring 1',
      price: 599.99,
    },
    {
      image: 'https://source.unsplash.com/featured/?ring&sig=2',
      title: 'Elegant Silver Ring',
      price: 899.99,
    },
    {
      image: 'https://source.unsplash.com/featured/?ring&sig=3',
      title: 'Classic Gold Ring',
      price: 1299.99,
    },
    {
      image: 'https://source.unsplash.com/featured/?ring&sig=4',
      title: 'Stylish Diamond Ring',
      price: 1999.99,
    },
    {
      image: 'https://source.unsplash.com/featured/?ring&sig=5',
      title: 'Vintage Pearl Ring',
      price: 799.99,
    },

    {
      image: 'https://source.unsplash.com/featured/?ring&sig=6',
      title: 'Beautiful Handmade Ring ',
      price: 599.99,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
