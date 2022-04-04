import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  total$: Observable<number>;
  
  constructor(private route: Router, private cartService: CartService) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
      );
   }

  ngOnInit(): void {
  }

  getRoute(): string{
    return this.route.url;
  }
}
