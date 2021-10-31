import { catchError, map, retry } from 'rxjs/operators';
import { Product } from './../models/product';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ProductsService {
    constructor(private http: HttpClient) {}

    products: Product[] = [];

    getAllProducts() {
        return this.http.get<Product[]>('http://localhost:5000/api/products');
    }
}
