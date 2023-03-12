import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lembrete } from '../models/novo-lembrete';

@Injectable({
  providedIn: 'root'
})
export class LembretesService {
  private url: string = 'http://localhost:5221/v1/lembrete';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
  constructor(private http: HttpClient) { }

  cadastrarNovoLembrete(novoLembrete: Lembrete): Observable<any> {
    console.log(novoLembrete)
    return this.http.post(this.url, novoLembrete, this.httpOptions)
  }

  ListarLembretes(): Observable<any> {
    return this.http.get(`${this.url}/list`, this.httpOptions)
  }

  ExcluirLembrete(id: number) {
    return this.http.delete(`${this.url}/${id}`, this.httpOptions)
  }

}
