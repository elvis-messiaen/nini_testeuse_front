import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardBlogComponent} from "./card-blog/card-blog.component";
import {HomeComponent} from "./home/home.component";
import {AProposDeNousComponent} from "./a-propos-de-nous/a-propos-de-nous.component";
import {ContactComponent} from "./enchangeClient/contact/contact.component";
import {AlimentationsComponent} from "./alimentations/alimentations.component";
import {ParfumsComponent} from "./parfums/parfums.component";
import {ChatComponent} from "./chat/chat.component";
import {FroideComponent} from "./froide/froide.component";
import {ChaudComponent} from "./chaud/chaud.component";
import {MainsComponent} from "./mains/mains.component";
import {VisageComponent} from "./visage/visage.component";
import {CheveuxComponent} from "./cheveux/cheveux.component";
import {MenageComponent} from "./menage/menage.component";
import {ConfiseriesComponent} from "./confiseries/confiseries.component";
import {AppareilsComponent} from "./appareils/appareils.component";
import {DetailProduitComponent} from "./detail-produit/detail-produit.component";
import {HistoireComponent} from "./componets/histoire/histoire.component";
import {NewsletterComponent} from "./enchangeClient/newsletter/newsletter.component";

const routes: Routes = [
  {path: 'detailproduit', component: DetailProduitComponent},
  {path: 'home', component: HomeComponent},
  {path: 'blog', component: CardBlogComponent},
  {path: 'apropos', component: AProposDeNousComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'alimentations', component: AlimentationsComponent},
  {path: 'parfums', component: ParfumsComponent},
  {path: 'chat', component: ChatComponent},
  {path: 'froide', component: FroideComponent},
  {path: 'chaud', component: ChaudComponent},
  {path: 'mains', component: MainsComponent},
  {path: 'visage', component: VisageComponent},
  {path: 'cheveux', component: CheveuxComponent},
  {path: 'menage', component: MenageComponent},
  {path: 'confiseries', component: ConfiseriesComponent},
  {path: 'appareils', component: AppareilsComponent},
  {path: 'histoire', component: HistoireComponent},
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'products/:id', component: DetailProduitComponent},
  {path: '**', redirectTo: 'PageNotFoundComponent'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
