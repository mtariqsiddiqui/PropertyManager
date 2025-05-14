import {Injectable} from '@angular/core';
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

  addBiller(biller: IBiller): Observable<IBiller> {
    return this.http.post<IBiller>('http://localhost:3000/billers', biller);
  }

  updateBiller(biller: IBiller): Observable<IBiller> {
    return this.http.put<IBiller>(`http://localhost:3000/billers/${biller.id}`, biller);
  }

  deleteBiller(id: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/billers/${id}`);
  }
}
