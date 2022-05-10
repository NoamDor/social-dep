import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Request } from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  private readonly SERVER_PREFIX = 'http://localhost:3000/';
  private readonly REQUEST_ENDPOINT = 'request';
  private readonly REQUEST_FULL_ENDPOINT = this.SERVER_PREFIX + this.REQUEST_ENDPOINT;

  constructor(private httpClient: HttpClient) { }

  createRequest(request: Request): Promise<Request> {
    return this.httpClient.post<Request>(this.REQUEST_FULL_ENDPOINT, request).toPromise();
  }
}
