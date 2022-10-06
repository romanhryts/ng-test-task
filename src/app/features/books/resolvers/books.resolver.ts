import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IBook } from '../../../models/IBook';
import { ApiService } from '../../../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class BooksResolver implements Resolve<IBook[]> {
  private readonly endpoint: string = 'Books';

  constructor(private readonly apiService: ApiService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBook[]> {
    return this.apiService.getData<IBook[]>(this.endpoint);
  }
}
