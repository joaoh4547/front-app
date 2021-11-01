import { ProductsService } from 'src/app/services/products.service';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { ContentComponent } from './layout/content/content.component';
import { HomeComponent } from './pages/home/home.component';
import { ContainerComponent } from './ui/container/container.component';
import { ProductCardComponent } from './ui/product-card/product-card.component';
import { ProductsListComponent } from './ui/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './pages/product/product.component';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

registerLocaleData(localePt);
@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        ContentComponent,
        HomeComponent,
        ContainerComponent,
        ProductCardComponent,
        ProductsListComponent,
        ProductComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FontAwesomeModule,
    ],
    providers: [ProductsService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
    bootstrap: [AppComponent],
})
export class AppModule {}
