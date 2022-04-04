import { Injectable } from '@angular/core';
import { Product } from 'src/app/product.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>(`${environment.url_api}producto`);
  }
  getProduct(id: string){
    return this.http.get<Product>(`${environment.url_api}producto/${id}`);
  }

  createProduct(product: Product){
    return this.http.post(`${environment.url_api}producto`, product);
  }

  updateProduct(id: string, changes: Partial<Product>){
    return this.http.put(`${environment.url_api}producto/${id}`, changes);
  }

  deletePorduct(id: string){
      return this.http.delete(`${environment.url_api}producto/${id}`);
  }
}
