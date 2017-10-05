import { Observable } from 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  public getData$(): Observable<string[]> {
    return this.http.get<string[]>('/api/data');
  }
}