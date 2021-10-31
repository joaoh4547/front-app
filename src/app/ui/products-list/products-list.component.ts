import { ProductsService } from './../../services/products.service';

import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.scss'],
    providers: [ProductsService],
})
export class ProductsListComponent implements OnInit {
    products: Product[];
    constructor(private productsService: ProductsService) {}
    getAllProducts() {
        this.productsService
            .getAllProducts()
            .subscribe((products: Product[]) => {
                this.products = products;
            });
    }

    ngOnInit(): void {
        this.getAllProducts();
        console.log(this.products);
    }
}
