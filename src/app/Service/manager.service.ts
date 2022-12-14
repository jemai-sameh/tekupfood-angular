import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Manager } from '../Model/manager';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  baseurl :string = environment.baseurl+"/manager"

  constructor(private http: HttpClient) { }

  save(entity: Manager): Observable<Manager> {
    return this.http.post(`${this.baseurl}/save`, entity)
    .pipe(
      map((response:any) => response as Manager)
    );
  }
  findAll(): Observable<Manager[]> {
    return this.http.get<Manager[]>(`${this.baseurl}/findAll`)
    .pipe(
      map((response:any) => response as Manager[])
    );
 
  }
 // deleteManager(id: number): Observable<any> {
  //  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  //}
 
  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseurl}/deleteById/${id}`,{ responseType: 'text' });
  }
 
  findById(id: number): Observable<Manager> {
    return this.http.get(`${this.baseurl}/findById/${id}`).pipe(
      map((response:any) => response as Manager)
    );
  }
 
}
