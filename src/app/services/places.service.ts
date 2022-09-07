import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  private _places: any = [];

  private URL_API = 'http://localhost:4001/api/places';

  get places() {
    return this._places;
  }

  constructor(private http: HttpClient) {}

  public get() {
    return this.http.get(this.URL_API);
  }

  public post(url: string, data: any) {
    return this.http.post(url, data);
  }
}
