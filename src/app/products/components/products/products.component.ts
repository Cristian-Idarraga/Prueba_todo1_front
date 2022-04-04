import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[];
  constructor(private productsService: ProductsService) { 
    
  }

  clickProduct(id: number) {
    console.log(`producto ${id}`)
  }
  
  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe((products : any) => {
      console.log(products)
      this.products = products.data;
    })
  }

}