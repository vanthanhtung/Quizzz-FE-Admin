import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const url = "http://localhost:8080/categories";

@Injectable({
  providedIn: "root",
})
export class CategoriesService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(url);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${url}/${id}`);
  }

  create(data: { name: String }): Observable<any> {
    return this.http.post(url, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
}
