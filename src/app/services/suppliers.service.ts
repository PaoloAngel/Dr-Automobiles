import { Injectable } from '@angular/core';
import { ISuppliers } from 'src/app/models/suppliers';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuppliersService {

  constructor(private http: HttpClient) { }

  getSuppliers(): Observable<ISuppliers[]>{
    return this.http
    .get<any>('/assets/data/suppliers.JSON').pipe(map((data) => data.mockSuppliers))
  }

}
