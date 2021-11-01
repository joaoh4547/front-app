import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import {
    ActivatedRoute,
    NavigationStart,
    Router,
    RouterState,
} from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-buy-product',
    templateUrl: './buy-product.component.html',
    styleUrls: ['./buy-product.component.scss'],
})
export class BuyProductComponent implements OnInit {
    constructor(private router: Router) {}
    product: Product;
    ngOnInit(): void {
        if (window.history.state.product) {
            this.product = window.history.state.product;
        } else {
            this.router.navigate(['/']);
        }
    }
}
