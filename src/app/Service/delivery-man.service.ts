import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { DeliveryMan } from '../Model/delivery-man';
@Injectable({
  providedIn: 'root'
})
export class DeliveryManService {
  baseurl :string = environment.baseurl+"/deliveryMan"

  constructor(private http: HttpClient) { }

  save(entity: DeliveryMan): Observable<DeliveryMan> {
    return this.http.post(`${this.baseurl}/save`, entity)
    .pipe(
      map((response:any) => response as DeliveryMan)
    );
  }
  findAll(): Observable<DeliveryMan[]> {
    return this.http.get<DeliveryMan[]>(`${this.baseurl}/findAll`)
    .pipe(
      map((response:any) => response as DeliveryMan[])
    );
 
  }
 // deleteDeliveryMan(id: number): Observable<any> {
  //  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  //}
 
  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseurl}/deleteById/${id}`,{ responseType: 'text' });
  }
 
  findById(id: number): Observable<DeliveryMan> {
    return this.http.get(`${this.baseurl}/findById/${id}`).pipe(
      map((response:any) => response as DeliveryMan)
    );
  }
 
}
