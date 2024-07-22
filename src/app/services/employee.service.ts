import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  postApi(data: any): Observable<any> {

    return this.http.post(`https://dummy.restapiexample.com/api/v1/create`, data)
// return this.http.post(`https://first-project-1ff07-default-rtdb.firebaseio.com/Product.json/`,data)
  }

  getApi(): Observable<any> {

    return this.http.get(`https://dummy.restapiexample.com/api/v1/employees`)

  }

  getApiById(id:any):Observable<any>{
    
    return this.http.get(`https://dummy.restapiexample.com/api/v1/employee/${id}`)

  }

  deleteApi(id:any):Observable<any>{
return this.http.delete(`https://dummy.restapiexample.com/api/v1/delete/${id}`)
  }

  getId(id:any):Observable<any>{

    return this.http.get(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
  }

  updateApi(data:any, id:any):Observable<any>{

    return this.http.put(`https://dummy.restapiexample.com/api/v1/update`,data,id)
  }
}
