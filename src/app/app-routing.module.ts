import { BuyProductComponent } from './pages/buy-product/buy-product.component';
import { ProductComponent } from './pages/product/product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'inicio',
        component: HomeComponent,
    },
    {
        path: 'produto',
        children: [
            {
                path: ':id',
                component: ProductComponent,
            },
            {
                path: ':id/comprar',
                component: BuyProductComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
