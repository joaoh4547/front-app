import { Product } from 'src/app/models/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-buy-product',
    templateUrl: './buy-product.component.html',
    styleUrls: ['./buy-product.component.scss'],
})
export class BuyProductComponent implements OnInit {
    constructor(private router: Router) {}
    product: Product;
    quantity = 0;
    addIcon = faPlus;
    removeIcon = faMinus;
    add() {
        this.quantity += 1;
    }
    remove() {
        if (this.quantity - 1 >= 0) {
            this.quantity -= 1;
        }
    }
    total() {
        return this.product.price * this.quantity;
    }

    buy() {
        if (this.quantity === 0) {
            alert('A quantidade deve ser superior a zero !!!');
        } else {
            this.router.navigate(['/finalizar_ou_continuar']);
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
