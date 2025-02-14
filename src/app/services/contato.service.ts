import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {
  private apiUrl = 'http://localhost:3000/contatos';

  constructor(private http: HttpClient) {}

  listarContatos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  cadastrarContato(contato: any): Observable<any> {
    return this.http.post(this.apiUrl, contato);
  }

  atualizarContato(id: number, contato: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, contato);
  }

  excluirContato(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
