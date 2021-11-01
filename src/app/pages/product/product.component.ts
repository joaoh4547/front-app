import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
    constructor(
        private route: ActivatedRoute,
        private productsService: ProductsService,
        private router: Router
    ) {}
    product: Product;
    ShopIcon = faShoppingCart;

    onBuy() {
        const extra: NavigationExtras = {
            state: {
                product: this.product,
            },
        };
        this.router.navigate(['/produto/1/comprar'], extra);
    }
    ngOnInit(): void {
        const id: number = this.route.snapshot.params['id'];
        this.productsService
            .getById(id)
            .subscribe((product) => (this.product = product));
    }
}
