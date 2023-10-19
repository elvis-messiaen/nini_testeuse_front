import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardBlogComponent} from "./card-blog/card-blog.component";
import {HomeComponent} from "./home/home.component";
import {AProposDeNousComponent} from "./a-propos-de-nous/a-propos-de-nous.component";
import {ContactComponent} from "./enchangeClient/contact/contact.component";
import {AlimentationsComponent} from "./produits/alimentations/alimentations.component";
import {ParfumsComponent} from "./produits/parfums/parfums.component";
import {ChatComponent} from "./produits/chat/chat.component";
import {FroideComponent} from "./produits/froide/froide.component";
import {ChaudComponent} from "./produits/chaud/chaud.component";
import {MainsComponent} from "./produits/mains/mains.component";
import {VisageComponent} from "./produits/visage/visage.component";
import {CheveuxComponent} from "./produits/cheveux/cheveux.component";
import {MenageComponent} from "./produits/menage/menage.component";
import {ConfiseriesComponent} from "./produits/confiseries/confiseries.component";
import {AppareilsComponent} from "./produits/appareils/appareils.component";
import {DetailProduitComponent} from "./detail-produit/detail-produit.component";
import {HistoireComponent} from "./components/histoire/histoire.component";
import {NewsletterComponent} from "./enchangeClient/newsletter/newsletter.component";
import {CreatedCardComponent} from "./admin/created-card/created-card.component";
import {QualiteComponent} from "./components/test/qualite/qualite.component";
import {GoutComponent} from "./components/test/gout/gout.component";
import {PackagingComponent} from "./components/test/packaging/packaging.component";
import {PrixComponent} from "./components/test/prix/prix.component";
import {EfficaciteComponent} from "./components/test/efficacite/efficacite.component";

const routes: Routes = [
  {path: 'detailproduit', component: DetailProduitComponent,
    children: [
      {path: '', redirectTo: 'qualite', pathMatch: 'prefix'},
      {path: 'qualite',component: QualiteComponent},
      {path: 'gout',component: GoutComponent},
      {path: 'packaging',component: PackagingComponent},
      {path: 'prix',component: PrixComponent},
      {path: 'efficacite',component: EfficaciteComponent}]
  },
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: CardBlogComponent},
  {path: 'apropos', component: AProposDeNousComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'alimentations', component: AlimentationsComponent},
  {path: 'parfums', component: ParfumsComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'froide', component: FroideComponent},
  {path: 'chaude', component: ChaudComponent},
  {path: 'mains', component: MainsComponent},
  {path: 'visage', component: VisageComponent},
  {path: 'cheveux', component: CheveuxComponent},
  {path: 'menage', component: MenageComponent},
  {path: 'confiseries', component: ConfiseriesComponent},
  {path: 'appareils', component: AppareilsComponent},
  {path: 'histoire', component: HistoireComponent},
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'products/:id', component: DetailProduitComponent},
  {path: 'created_card_admin', component: CreatedCardComponent},
  {path: '**', redirectTo: 'PageNotFoundComponent'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
