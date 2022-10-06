import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly _apiLink: string = 'https://fakerestapi.azurewebsites.net/api/v1/';

  constructor(private readonly httpClient: HttpClient) {
  }

  // here we create reusable service not only for books,
  // so now we can fetch different data from API
  public getData<T>(endpoint: string): Observable<T> {
    return this.httpClient.get<T>(this._apiLink + endpoint);
  }
}
