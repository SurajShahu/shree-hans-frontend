import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Enquiry } from '../models/enquiry';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {

  private postUrl = environment.apiUrl + '/api/enquiry' ;      // POST URL
  private getUrl  = environment.apiUrl + '/api/enquiries';    // GET URL

  constructor(private http: HttpClient) {}

  saveEnquiry(enquiry: Enquiry): Observable<any> {
    return this.http.post(this.postUrl, enquiry);
  }

  getAll(): Observable<Enquiry[]> {
    return this.http.get<Enquiry[]>(this.getUrl);
  }
}
