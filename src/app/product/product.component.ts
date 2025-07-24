import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  name = 'SSR Laptop';
  price = 59999;
  description = 'A high-performance laptop rendered on the server!';
}
