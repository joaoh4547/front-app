import { ProductsService } from 'src/app/services/products.service';
import { NgModule } from '@angular/core';
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
    ],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule],
    providers: [ProductsService],
    bootstrap: [AppComponent],
})
export class AppModule {}
