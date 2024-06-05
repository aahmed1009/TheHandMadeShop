import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-two',
  templateUrl: './collection-two.component.html',
  styleUrls: ['./collection-two.component.css'],
})
export class CollectionTwoComponent {
  bracelets = [
    {
      image: 'https://source.unsplash.com/featured/?bracelet&sig=1',
      title: 'Elegant Silver Bracelet',
      price: 699.99,
    },
    {
      image: 'https://source.unsplash.com/featured/?bracelet&sig=2',
      title: 'Classic Gold Bracelet',
      price: 1199.99,
    },
    {
      image: 'https://source.unsplash.com/featured/?bracelet&sig=3',
      title: 'Stylish Diamond Bracelet',
      price: 1799.99,
    },
    {
      image: 'https://source.unsplash.com/featured/?bracelet&sig=4',
      title: 'Vintage Pearl Bracelet',
      price: 899.99,
    },
    {
      image: 'https://source.unsplash.com/featured/?bracelet&sig=5',
      title: 'Beautiful Handmade Bracelet',
      price: 499.99,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
