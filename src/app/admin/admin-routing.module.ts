import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormEditProductComponent } from './components/form-edit-product/form-edit-product.component';
import { FormProductComponent } from './components/form-product/form-product.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent
      },
      {
        path: 'products',
        component: ProductsListComponent
      },
      {
        path: 'create',
        component: FormProductComponent
      },
      {
        path: 'products/edit/:id',
        component: FormEditProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
