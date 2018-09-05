import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
    console.log('Test Service Initialize');
  }
  getUser() {
    return this.http.get('http://127.0.0.1:3004/people').pipe(map( res => res));
  }
}
