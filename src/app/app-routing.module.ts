import { FinishOrContinueComponent } from './pages/finish-or-continue/finish-or-continue.component';
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
    {
        path: 'finalizar_ou_continuar',
        component: FinishOrContinueComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
