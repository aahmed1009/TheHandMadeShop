import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = 'http://localhost/APIS';
  constructor(private http: HttpClient) {}

  // get_Users() {
  //   return this.http.get<any[]>('http://localhost/API/get_users.php');
  // }
  // get_UsersDetails(cond: any) {
  //   return this.http.get<any[]>('http://localhost/API/get_users.php?' + cond);
  // }
  get_Users() {
    return this.http.get<any[]>(this.baseUrl + '/get_users.php');
  }
  get_UsersDetails(cond: any) {
    return this.http.get<any[]>(`${this.baseUrl}/get_users.php?${cond}`);
  }

  register_user(data: any): Observable<any> {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + '/register.php', body);
  }
  insert_user(data: any): Observable<any> {
    const body = JSON.stringify(data);
    return this.http.post(this.baseUrl + '/login.php', body);
  }
  update_user(data: any) {
    const body = JSON.stringify(data);
    console.log(body);
    return this.http.post(this.baseUrl + '/update_user.php', body);
  }
}
