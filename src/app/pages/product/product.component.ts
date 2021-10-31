import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private productsService: ProductsService
    ) {}
    product: Product;
    ngOnInit(): void {
        const id: number = this.route.snapshot.params['id'];
        this.productsService
            .getById(id)
            .subscribe((product) => (this.product = product));
    }
}
