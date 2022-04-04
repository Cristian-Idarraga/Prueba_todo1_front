import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../../../core/services/products/products.service';
import { Product } from '../../../product.model';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;
  constructor(private route: ActivatedRoute, private produtsService: ProductsService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id);
    }) //Escuchamos los cambios de los parametros
  }

  fetchProduct(id: string){
    this.produtsService.getProduct(id).subscribe(product => {
      this.product = product;
    })
  }

  createProduct(){
    const newProduct: Product = {
      cdProducto: "222",
      nombreProducto: "nuevo desde angular",
      precio: 3000,
      cantidadStock: 5000,
      cdCategoria: 'JG'
    }
    this.produtsService.createProduct(newProduct).subscribe(product => console.log(product));
  }

  updateProduct(){
    const upProduct: Partial<Product> = {
      nombreProducto: "product",
      precio: 6000,
    }
    this.produtsService.updateProduct('222', upProduct).subscribe(product => console.log(product));
  }

  deleteProduct(){
    this.produtsService.deletePorduct('222').subscribe(rta => console.log(rta))
  }
}
