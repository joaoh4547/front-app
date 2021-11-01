import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
    selector: 'app-shopping-badge',
    templateUrl: './shopping-badge.component.html',
    styleUrls: ['./shopping-badge.component.scss'],
})
export class ShoppingBadgeComponent implements OnInit {
    icon = faShoppingCart;
    constructor(private shoppingCartService: ShoppingCartService) {}

    shoppingItens() {
        return this.shoppingCartService.quantity();
    }
    ngOnInit(): void {}
}
