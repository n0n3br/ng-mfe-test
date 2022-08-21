import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map, Observable } from 'rxjs';
import { AppState } from '../store/reducer';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  get(): Observable<AppState['user']> {
    return this.httpClient
      .get('https://jsonplaceholder.typicode.com/users/1')
      .pipe(
        delay(3000),
        map((data: any) => ({
          id: data.id,
          name: data.name,
          username: data.username,
          email: data.email,
        }))
      );
  }
}
