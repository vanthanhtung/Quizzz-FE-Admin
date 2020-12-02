import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = "http://localhost:5432/records"

@Injectable({
  providedIn: 'root'
})
export class RecordService {

  constructor(private http : HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(url + "/getAll")
  }

  get(id: any): Observable<any> {
    return this.http.get(`${url}/${id}`);
  }

  create(data): Observable<any> {
    return this.http.post(url, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
}
