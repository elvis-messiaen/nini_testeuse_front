import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CardProduitComponent } from './card-produit/card-produit.component';
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { CardBlogComponent } from './card-blog/card-blog.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { ContactComponent } from './contact/contact.component';
import { AProposDeNousComponent } from './a-propos-de-nous/a-propos-de-nous.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardProduitComponent,
    DetailProduitComponent,
    CardBlogComponent,
    DetailBlogComponent,
    ContactComponent,
    AProposDeNousComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
