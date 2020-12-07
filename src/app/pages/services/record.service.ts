import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5432/records';

@Injectable({
    providedIn:'any'
})

export class RecordService {

    constructor(public http: HttpClient) { }

    getAll(): Observable<any> {
      return this.http.get('http://localhost:5432/records/getAll');
    }

    getById(id: any): Observable<any>{
      return this.http.get(`${baseUrl}/${id}`);
    }

    create(data): Observable<any>{
      return this.http.post(baseUrl,data);
    }

    delete(id: any): Observable<any>{
      return this.http.delete(`${baseUrl}/${id}`);
    }

    update(id: any, data): Observable<any> {
      return this.http.put(`${baseUrl}/${id}`, data);
    }

    getAllByCategoryName(name: string): Observable<any> {
      return this.http.get(`${baseUrl}/categories/${name}`);
    }
}
