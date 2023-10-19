import {Injectable} from "@angular/core";
import {Card} from "../models/card";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {filter, map, Observable, Subscription, switchMap} from "rxjs";
import {Category} from "../models/enum/category";

@Injectable({
  providedIn: 'root'
})
export class CardServices {
  private urlApi = environment.serveurUrl;

  constructor(private http: HttpClient) {
  }

  getAllCards(){
    return this.http.get<Card[]>(this.urlApi)
  }

  // Methode pour filtrer les cartes par catégorie
  // à finir
  getLoadCardsByCategory(cardCategory: Card[], categorie: string): Subscription {
    return this.http.get<Card[]>(this.urlApi).subscribe({
      next: data => {
        cardCategory = [...data].filter((card) => card.category == categorie);
        console.log(cardCategory);
      }
    })
  }
  getCardById(cardId: number): Observable<Card> {
    return this.http.get<Card>(`http://localhost:3000/products/${cardId}`);
  }

  getImagesById(cardId: number): Observable<Card[]> {
    return this.http.get<Card[]>(`http://localhost:3000/products/${cardId}/image`);
  }

  addCard(formValue: { title: string, description: string, imageUrl: string, location?: string }): Observable<Card> {
    return this.getAllCards().pipe(
      map(card => [...card].sort((a,b) => a.id - b.id)),
      map(sortedCard => sortedCard[sortedCard.length - 1]),
      map(previousCard => ({
        ...formValue,
        id: previousCard.id + 1
      })),
      switchMap(newCard => this.http.post<Card>(
        this.urlApi,
        newCard)
      )
    );
  }
}
