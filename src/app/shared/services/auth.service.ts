import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SignInData, SignUpData, UserResponse } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  signup(user: SignUpData): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.baseUrl}/signup`, user);
  }

  signin(user: SignInData): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.baseUrl}/signin`, user);
  }
}
