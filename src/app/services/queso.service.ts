import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import { Queso } from '../interface/queso';
import { QUESOS } from '../mocks/mock-quesos';

@Injectable({
  providedIn: 'root',
})
export class QuesoService {
  constructor() {}

  getQuesos(): Observable<Queso[]> {
    const quesos = of(QUESOS);
    return quesos;
  }

  getQuesobById(id: number): Observable<Queso | undefined> {
    const queso = QUESOS.find((q) => q.id === id);
    return of(queso);
  }
}
