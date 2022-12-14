import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Client } from '../Model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  baseurl :string = environment.baseurl+"/client"

  constructor(private http: HttpClient) { }

  save(entity: Client): Observable<Client> {
    return this.http.post(`${this.baseurl}/save`, entity)
    .pipe(
      map((response:any) => response as Client)
    );
  }
  findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(`${this.baseurl}/findAll`)
    .pipe(
      map((response:any) => response as Client[])
    );
 
  }
 // deleteClient(id: number): Observable<any> {
  //  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  //}
 
  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseurl}/deleteById/${id}`,{ responseType: 'text' });
  }
 
  findById(id: number): Observable<Client> {
    return this.http.get(`${this.baseurl}/findById/${id}`).pipe(
      map((response:any) => response as Client)
    );
  }
 
}
