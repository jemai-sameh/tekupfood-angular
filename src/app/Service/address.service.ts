import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Address } from '../Model/address';



@Injectable({
  providedIn: 'root'
})
export class AddressService {
  baseurl: string = environment.baseurl + "/address"

  constructor(private http: HttpClient) { }

  save(entity: Address): Observable<Address> {
    console.log("***",entity);
    return this.http.post(`${this.baseurl}/save`, entity)
      .pipe(
        map((response: any) => response as Address)
      );
  }
  findAll(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.baseurl}/All`);
  }
  /*
  findAll(): Observable<Address[]> {
    return this.http.get<Address[]>(`${this.baseurl}/All`)
      .pipe(
        map((response: any) => response as Address[])
      );

  }*/
  // deleteAddress(id: number): Observable<any> {
  //  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  //}

  deleteById(id: any): Observable<any> {
    return this.http.delete(`${this.baseurl}/deleteById/${id}`, { responseType: 'text' });
  }

  findById(id: number): Observable<Address> {
    return this.http.get(`${this.baseurl}/findById/${id}`).pipe(
      map((response: any) => response as Address)
    );
  }


}
