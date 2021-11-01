import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ShoppingCartService {
    constructor() {}

    private items: any[] = [];

    quantity() {
        return this.items.length;
    }
}
