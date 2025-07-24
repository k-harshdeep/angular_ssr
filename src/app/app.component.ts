import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-ssr-demo';

  ngOnInit() {
    // console.log('Hydrated! Angular is now interactive.');
      setTimeout(() => {
        console.log('✅ Angular hydrated this component.uytytuyt');
      }, 1000);
  }
}
