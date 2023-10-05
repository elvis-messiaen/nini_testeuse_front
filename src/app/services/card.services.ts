import {Injectable} from "@angular/core";
import {Card} from "../models/card";
import {HttpClient} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CardServices {
  private urlApi = environment.serveurUrl;

  constructor(private http: HttpClient) {
  }
  /*
  getAllCards(){
    return this.http.get<Card[]>(this.urlApi)
  }
*/
  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.urlApi);
  }

  getCardById(cardId: number): Observable<Card> {
    return this.http.get<Card>(`http://localhost:3000/products/${cardId}`);
  }
}

