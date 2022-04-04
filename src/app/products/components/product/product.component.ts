import {Component ,Input ,Output , EventEmitter} from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {

  constructor(private cartService: CartService){}

  @Input() product: Product = {
    cdProducto: "",
    cdCategoria: "",
    nombreProducto: "",
    precio: 0,
    cantidadStock: 0,
  };
  @Output() productClicked: EventEmitter<any> = new EventEmitter(); //any, number ...

  today = new Date();
  
  addCart(){
    console.log(`${this.product.nombreProducto} agregado al carrito`);
    this.cartService.addCart(this.product);
    // this.productClicked.emit(this.product.id)
  }
}