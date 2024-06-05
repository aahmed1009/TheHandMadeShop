import { Component } from '@angular/core';

@Component({
  selector: 'app-collection-three',
  templateUrl: './collection-three.component.html',
  styleUrls: ['./collection-three.component.css'],
})
export class CollectionThreeComponent {
  earrings = [
    {
      image: 'https://source.unsplash.com/featured/?earring&sig=1',
      title: 'Beautiful Handmade Earring 1',
      price: 399.99,
    },
    {
      image: 'https://source.unsplash.com/featured/?earring&sig=2',
      title: 'Elegant Silver Earring',
      price: 699.99,
    },
    {
      image: 'https://source.unsplash.com/featured/?earring&sig=3',
      title: 'Classic Gold Earring',
      price: 999.99,
    },
    {
      image: 'https://source.unsplash.com/featured/?earring&sig=4',
      title: 'Stylish Diamond Earring',
      price: 1499.99,
    },
    {
      image: 'https://source.unsplash.com/featured/?earring&sig=5',
      title: 'Vintage Pearl Earring',
      price: 599.99,
    },
    {
      image: 'https://source.unsplash.com/featured/?earring&sig=6',
      title: 'Beautiful Handmade Earring ',
      price: 399.99,
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
