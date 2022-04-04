import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Validators } from '@angular/forms';
import { MyValidators } from 'src/app/utils/validators';

@Component({
  selector: 'app-form-edit-product',
  templateUrl: './form-edit-product.component.html',
  styleUrls: ['./form-edit-product.component.scss']
})
export class FormEditProductComponent implements OnInit {

  form: FormGroup;
  id: string;

  constructor(private formBuilder: FormBuilder, private productService: ProductsService, private router: Router, private activeRoute: ActivatedRoute) { 
    this.buildForm()
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.id = params.id;
      this.productService.getProduct(this.id).subscribe(product => {
        this.form.patchValue({
          cdProdcuto: product.cdProducto,
          nombreProducto: product.nombreProducto,
          precio: product.precio,
          cantidadStock: product.cantidadStock,
          cdCategoria : product.cdCategoria
        })
      })
    })
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title:['', [Validators.required]],
      price: ['', [Validators.required, MyValidators.isPriceValid]],
      image: ['', ],
      description: ['', [Validators.required]]
    })
  }

  saveProduct(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const product = this.form.value;
      this.productService.updateProduct(this.id, product).subscribe(product => {
        console.log(product)
        this.router.navigate(['./admin/products']);
      })
    }
  }
}
