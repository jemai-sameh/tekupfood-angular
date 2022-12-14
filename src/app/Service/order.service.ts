import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Commande } from '../Model/commande';
@Injectable({
  providedIn: 'root'
})
export class OrderService {
  baseurl :string = environment.baseurl+"/order"

  constructor(private http: HttpClient) { }

  save(entity: Commande): Observable<Commande> {
    return this.http.post(`${this.baseurl}/save`, entity)
    .pipe(
      map((response:any) => response as Commande)
    );
  }
  findAll(): Observable<Commande[]> {
    return this.http.get<Commande[]>(`${this.baseurl}/findAll`)
    .pipe(
      map((response:any) => response as Commande[])
    );
 
  }
 // deleteCommande(id: number): Observable<any> {
  //  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  //}
 
  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseurl}/deleteById/${id}`,{ responseType: 'text' });
  }
 
  findById(id: number): Observable<Commande> {
    return this.http.get(`${this.baseurl}/findById/${id}`).pipe(
      map((response:any) => response as Commande)
    );
  }
 
}
