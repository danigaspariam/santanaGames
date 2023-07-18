import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListagemService {

  constructor(protected readonly httpClient: HttpClient) { }

  public getAllAtletes(): Observable<any>{
    const url = 'https://santanagames-default-rtdb.firebaseio.com/.json';
    return this.httpClient.get<any>(url);
  }
}
