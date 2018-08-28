import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';
import { List } from './models/List';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor(private http: HttpClient) { }

  private serverApi = 'http://localhost:3000';

  public getAllLists(): Observable<any> {

    let URI = `${this.serverApi}/bucketlist/`;
    let obj = this.http.get(URI);
    return obj;
    // .map(res => res.json())
    // .map(res => <List[]>res.lists);
  }

  public deleteList(listId: string) {
    let URI = this.serverApi+'/bucketlist/'+listId;
    let headers = new HttpHeaders;
    headers.append('Content-Type', 'application/json');
    let obj = this.http.delete(URI, { headers });
    return obj;
    // .map(res => res.json());
  }

  public addList(list: List) {
    let URI = `${this.serverApi}/bucketlist/`;
    let headers = new HttpHeaders;
    // let body = JSON.stringify({ title: list.title, description: list.description, category: list.category });
    let body = list;
    // console.log(body);
    headers.append('Content-Type', 'application/json');
    let obj = this.http.post(URI, body, { headers: headers });
    return obj;
    // .map(res => res.json());
  }


}
