import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = environment.apiUrl + '/admin/signin';

  constructor(private http: HttpClient) {}

  login(data: any) {
    console.log('👉 Sending login request', data);
    return this.http.post(this.url, data,{ headers: { 'Content-Type': 'application/json' } });
  }
}
