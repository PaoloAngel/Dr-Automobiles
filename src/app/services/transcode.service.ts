import { Injectable } from '@angular/core';
import { ITransCode } from '../models/transCode';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class TranscodeService {

  apiUrl = '/assets/data/transcode.JSON'

  constructor(private http: HttpClient) { }

  getTransCode(): Observable<ITransCode[]>{
    return this.http
    .get<any>(this.apiUrl).pipe(map((data) => data.mockTransCode))
  }

  searchTransCode(term: string): Observable<ITransCode[]>{
    return this.http
      .get<any>(this.apiUrl)
      .pipe(map((data) => {
        return data.mockTransCode.filter((transCode: ITransCode) => transCode.itemNumber.includes(term));
      }));
  }

  uploadTransCode(transCodeData: ITransCode): Observable<ITransCode>{
    const uploadUrl = `${this.apiUrl}/upload`;
    return this.http.post<ITransCode>(uploadUrl, transCodeData)
  }

  downloadTransCode(): Observable<ITransCode[]>{
    const downloadUrl = `${this.apiUrl}/download`;
    return this.http.get<ITransCode[]>(downloadUrl)
  }

  save(){
  }

  delete(){
  }

}
