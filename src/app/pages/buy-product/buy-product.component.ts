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
    quantity = 0;

    total() {
        return this.product.price * this.quantity;
    }

    add() {
        this.quantity += 1;
    }

    buy() {
        if (this.quantity === 0) {
            alert('A quantidade deve ser superior a zero !!!');
        } else {
            this.router.navigate(['/finalizar_ou_continuar']);
        }
    }

    remove() {
        if (this.quantity - 1 >= 0) {
            this.quantity -= 1;
        }
    }

    ngOnInit(): void {
        if (window.history.state.product) {
            this.product = window.history.state.product;
        } else {
            this.router.navigate(['/']);
        }
    }
}
