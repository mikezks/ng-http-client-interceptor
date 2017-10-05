import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TokenService {

  constructor(private http: HttpClient) { }

  public requestToken(): Observable<string> {
    return this.http
                .get<string>('/api/token')
                .map(token => {
                    localStorage.setItem('token', token);
                    return token;
                });
  }
}   