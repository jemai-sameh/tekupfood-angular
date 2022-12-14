import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Plat } from '../Model/plat';
import { LabelValue } from '../Model/labelValue';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  baseurl :string = environment.baseurl+"/plat"

  constructor(private http: HttpClient) { }

  save(entity: Plat): Observable<Plat> {
    return this.http.post(`${this.baseurl}/save`, entity)
    .pipe(
      map((response:any) => response as Plat)
    );
  }
  findAll(): Observable<Plat[]> {
    return this.http.get<Plat[]>(`${this.baseurl}/findAll`)
    .pipe(
      map((response:any) => response as Plat[])
    );
  }
  
  findAllDto(): Observable<LabelValue[]> {
      return this.http.get<LabelValue[]>(`${this.baseurl}/findAllDto`)
      .pipe(
        map((response:any) => response as LabelValue[])
      );
    }
  
 // deletePlat(id: number): Observable<any> {
  //  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  //}
 
  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseurl}/deleteById/${id}`,{ responseType: 'text' });
  }
 
  findById(id: number): Observable<Plat> {
    return this.http.get(`${this.baseurl}/findById/${id}`).pipe(
      map((response:any) => response as Plat)
    );
  }
 
}
