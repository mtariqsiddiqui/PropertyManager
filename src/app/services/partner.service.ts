import {inject, Injectable, signal} from '@angular/core';
import {IBank, IBiller} from '../models/partner';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PartnerService {
  constructor(private http: HttpClient) {
  }

  getBillers(): Observable<IBiller[]> {
    return this.http.get<IBiller[]>(`http://localhost:3000/billers`);
  }

  getBanks():Observable<IBank[]> {
    return this.http.get<IBank[]>(`http://localhost:3000/banks`);
  }
}
