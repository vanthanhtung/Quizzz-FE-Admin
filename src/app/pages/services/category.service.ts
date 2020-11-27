import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:5432/categories';

@Injectable({
    providedIn:'any'
})

export class CategoryService {

    constructor(public http: HttpClient) { }

    getAll(): Observable<any> {
      return this.http.get(baseUrl);
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
      debugger
      return this.http.get(`${baseUrl}/categories/${name}`);
    }
}
