import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Payement } from '../Model/payement';

@Injectable({
  providedIn: 'root'
})
export class PayementService {
  baseurl :string = environment.baseurl+"/payment"

  constructor(private http: HttpClient) { }

  save(entity: Payement): Observable<Payement> {
    return this.http.post(`${this.baseurl}/save`, entity)
    .pipe(
      map((response:any) => response as Payement)
    );
  }
  findAll(): Observable<Payement[]> {
    return this.http.get<Payement[]>(`${this.baseurl}/findAll`)
    .pipe(
      map((response:any) => response as Payement[])
    );
 
  }
 // deletePayement(id: number): Observable<any> {
  //  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  //}
 
  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseurl}/deleteById/${id}`,{ responseType: 'text' });
  }
 
  findById(id: number): Observable<Payement> {
    return this.http.get(`${this.baseurl}/findById/${id}`).pipe(
      map((response:any) => response as Payement)
    );
  }
 
}
