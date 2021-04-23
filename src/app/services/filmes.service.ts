import { IFilme } from './../model/IFilme.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { EMPTY, Observable } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FilmesService {
  //variável que indica onde no backend as informações serão pesquisadas
  private URL: string = 'http://localhost:3000/filmes';

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  //método para buscar todos os filmes no backend
  buscarTodos(): Observable<IFilme[]> {
    //observable observa os eventos e avisa aos interessados quaisquer modificações
    return this.http.get<IFilme[]>(this.URL).pipe(
      //faz concatenação de vários métodos
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  //método para buscar filmes por ID no backend
  buscarPorId(id:number): Observable<IFilme> {
    //observable observa os eventos e avisa aos interessados quaisquer modificações
    return this.http.get<IFilme>(`${this.URL}/${id}`).pipe(
      //faz concatenação de vários métodos
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  //mensagem genérica para exibir erros
  exibeErro(e: any): Observable<any> {
    this.exibirMensagem(
      'ERRO!!!',
      'Não foi possível realizar a operação',
      'toast-error'
    );
    return EMPTY; //retorna vazio pra não dar erro na aplicação
  }

  //método para exibir mensagens
  exibirMensagem(titulo: string, mensagem: string, tipo: string): void {
    this.toastr.show(
      mensagem,
      titulo,
      { closeButton: true, progressBar: true },
      tipo
    );
  }

  //método para cadastrar
  cadastrar(filme: IFilme): Observable<IFilme> {
    return this.http.post<IFilme>(this.URL, filme).pipe(
      //faz concatenação de vários métodos
      map((retorno) => retorno),
      catchError((erro) => this.exibeErro(erro))
    );
  }

  //método para atualizar depois de buscarPorId
  atualizar(filme: IFilme): Observable<IFilme> {
    return this.http.put<IFilme>(`${this.URL}/${filme.id}`, filme).pipe(
      //faz concatenação de vários métodos
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

  //método para exclusao
  excluir(id: number): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`).pipe(
      //faz concatenação de vários métodos
      map(retorno => retorno),
      catchError(erro => this.exibeErro(erro))
    );
  }

}
