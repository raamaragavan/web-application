import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Furniture } from '../models/furniture';
import { Shop } from '../models/shop';
import { Magazine } from '../models/magazine';

@Injectable({
  providedIn: 'root'
})
export class PortalService {
  furnitureURL = 'assets/json/furnitures.json';
  shopURL = 'assets/json/shops.json';
  magazineURL = 'assets/json/magazines.json';

  constructor(private http: HttpClient) {
   }
    getFurnitures(): Observable<Furniture[]> {
    return this.http.get<Furniture[]>(this.furnitureURL);
  }

  getShops(): Observable<Shop[]> {
    return this.http.get<Shop[]>(this.shopURL);
  }

  getMagazines(): Observable<Magazine[]> {
    return this.http.get<Magazine[]>(this.magazineURL);
  }
}
