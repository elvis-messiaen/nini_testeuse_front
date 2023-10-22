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
import { HomeComponent } from './components/home/home.component';
import { AlimentationsComponent } from './produits/alimentations/alimentations.component';
import { ParfumsComponent } from './produits/parfums/parfums.component';
import { ChatComponent } from './produits/chat/chat.component';
import { FroideComponent } from './produits/froide/froide.component';
import { ChaudComponent } from './produits/chaud/chaud.component';
import { MainsComponent } from './produits/mains/mains.component';
import { VisageComponent } from './produits/visage/visage.component';
import { CheveuxComponent } from './produits/cheveux/cheveux.component';
import { MenageComponent } from './produits/menage/menage.component';
import { ConfiseriesComponent } from './produits/confiseries/confiseries.component';
import { AppareilsComponent } from './produits/appareils/appareils.component';
import { HistoireComponent } from './components/histoire/histoire.component';
import { PresentationComponent } from './components/presentation/presentation.component';
import { CategorieComponent } from './components/categorie/categorie.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NewsletterComponent } from './enchangeClient/newsletter/newsletter.component';
import { CreatedCardComponent } from './admin/created-card/created-card.component';
import { LoadingComponent } from './loading/loading.component';
import { QualiteComponent } from './components/test/qualite/qualite.component';
import { PackagingComponent } from './components/test/packaging/packaging.component';
import { GoutComponent } from './components/test/gout/gout.component';
import { EfficaciteComponent } from './components/test/efficacite/efficacite.component';
import { PrixComponent } from './components/test/prix/prix.component';
import { TestDetailsComponent } from './components/test/test-details/test-details.component';
import {MatButtonToggleModule} from "@angular/material/button-toggle";

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
    NewsletterComponent,
    CreatedCardComponent,
    LoadingComponent,
    QualiteComponent,
    PackagingComponent,
    GoutComponent,
    EfficaciteComponent,
    PrixComponent,
    TestDetailsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonToggleModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
