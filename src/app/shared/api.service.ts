import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http: HttpClient) { }

  // Create by POST
  poststudent(data: any) {
    return this._http.post<any>("http://localhost:3000/employees", data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  // Get method
  getstudent() {
    return this._http.get<any>("http://localhost:3000/employees")
      .pipe(map((res: any) => {
        return res;
      }));
  }

  // Update method
  updatestudent(data: any, id: number) {
    return this._http.put(`http://localhost:3000/employees/${id}`, data)
      .pipe(map((res: any) => {
        return res;
      }));
  }

  // Delete method
  deletestudent(id: number) {
    return this._http.delete<any>(`http://localhost:3000/employees/${id}`)
      .pipe(map((res: any) => {
        return res;
      }));
  }
}
