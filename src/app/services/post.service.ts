import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  //private url = 'http://jsonplaceholder.typicode.com/posts';
  private url =
    'https://4j6300xyyc.execute-api.us-east-1.amazonaws.com/prod/fundlisting?symbol=';
  constructor(private httpClient: HttpClient) {}

  getPosts(symbol: any) {
    return this.httpClient.get(this.url + symbol);
    //return {'test':'testvalue'}
  }
}
