import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ShoppingCartService {
    constructor() {}

    private items: CartItem[] = [];

    quantity() {
        return this.items.length;
    }

    add(item: CartItem) {
        this.items.push(item);
    }
}
