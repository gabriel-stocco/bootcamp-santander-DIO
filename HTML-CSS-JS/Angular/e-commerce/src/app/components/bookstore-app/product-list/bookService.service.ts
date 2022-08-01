import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Book } from './product-item/model/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class bookService{
  private url = 'https://api.itbook.store/1.0/new'

  constructor(private httpClient: HttpClient) { }

  getBook():Observable<any> {
    return this.httpClient.get<any>(this.url)
  }

}
