import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export class TitoResponse {
  message: string;
  num_items: number;
  result: any;
  status: boolean;
}

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  activateAccount(token: string, userId: string): Observable<TitoResponse> {
    return this.http.get<TitoResponse>(
      `${environment.apiUrl}/session/activate?token=${token}&user_id=${userId}`
    );
  }
}
