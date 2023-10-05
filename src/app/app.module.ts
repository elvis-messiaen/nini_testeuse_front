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
import { ContactComponent } from './enchangeClient/contact/contact.component';
import { AProposDeNousComponent } from './a-propos-de-nous/a-propos-de-nous.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import { HomeComponent } from './home/home.component';
import { AlimentationsComponent } from './alimentations/alimentations.component';
import { ParfumsComponent } from './parfums/parfums.component';
import { ChatComponent } from './chat/chat.component';
import { FroideComponent } from './froide/froide.component';
import { ChaudComponent } from './chaud/chaud.component';
import { MainsComponent } from './mains/mains.component';
import { VisageComponent } from './visage/visage.component';
import { CheveuxComponent } from './cheveux/cheveux.component';
import { MenageComponent } from './menage/menage.component';
import { ConfiseriesComponent } from './confiseries/confiseries.component';
import { AppareilsComponent } from './appareils/appareils.component';
import { HistoireComponent } from './componets/histoire/histoire.component';
import { PresentationComponent } from './componets/presentation/presentation.component';
import { CategorieComponent } from './componets/categorie/categorie.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { NewsletterComponent } from './enchangeClient/newsletter/newsletter.component';

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
    PageNotFoundComponent,
    HomeComponent,
    AlimentationsComponent,
    ParfumsComponent,
    ChatComponent,
    FroideComponent,
    ChaudComponent,
    MainsComponent,
    VisageComponent,
    CheveuxComponent,
    MenageComponent,
    ConfiseriesComponent,
    AppareilsComponent,
    HistoireComponent,
    PresentationComponent,
    CategorieComponent,
    NewsletterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
