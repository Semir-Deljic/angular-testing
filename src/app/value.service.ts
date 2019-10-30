import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {

  constructor() { }

  getData() {
    return 'real data';
  }

  getObservableValue(): Observable<string> {
    return of('observable value');
  }

  getPromiseValue(): Promise<string> {
    return new Promise((resolve, reject) => {
      resolve('promise value');
    });
  }
}
