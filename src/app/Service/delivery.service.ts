import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Delivery } from '../Model/delivery';
@Injectable({
  providedIn: 'root'
})
export class DeliveryService {
  baseurl :string = environment.baseurl+"/delivery"

  constructor(private http: HttpClient) { }

  save(entity: Delivery): Observable<Delivery> {
    return this.http.post(`${this.baseurl}/save`, entity)
    .pipe(
      map((response:any) => response as Delivery)
    );
  }
  findAll(): Observable<Delivery[]> {
    return this.http.get<Delivery[]>(`${this.baseurl}/findAll`)
    .pipe(
      map((response:any) => response as Delivery[])
    );
 
  }
 // deleteDelivery(id: number): Observable<any> {
  //  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  //}
 
  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseurl}/deleteById/${id}`,{ responseType: 'text' });
  }
 
  findById(id: number): Observable<Delivery> {
    return this.http.get(`${this.baseurl}/findById/${id}`).pipe(
      map((response:any) => response as Delivery)
    );
  }
 
}
