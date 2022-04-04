import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './components/product/product.component';
import { ProductRoutingModule } from './products-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './components/products/products.component';
import { CoreModule } from '../core/core.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { MaterialModule } from '../material/material.module';

    @NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent,
        ProductDetailsComponent
    ],
    imports: [
        CommonModule, 
        ProductRoutingModule,
        SharedModule,
        CoreModule,
        MaterialModule
    ]
})
export class ProductModule {}