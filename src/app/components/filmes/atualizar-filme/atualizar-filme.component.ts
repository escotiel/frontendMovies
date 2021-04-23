import { FilmesService } from './../../../services/filmes.service';
import { IFilme } from './../../../model/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-atualizar-filme',
  templateUrl: './atualizar-filme.component.html',
  styleUrls: ['./atualizar-filme.component.css']
})
export class AtualizarFilmeComponent implements OnInit {

  filme: IFilme = {
    nome: null,
    lancamento: null,
    orcamento: null
  };

  constructor(
    private filmesService: FilmesService,
    private router: Router,
    private activatedRouter: ActivatedRoute) { }

  ngOnInit(): void {
     const id = Number(this.activatedRouter.snapshot.paramMap.get('id'));//busca o Id
     this.filmesService.buscarPorId(id).subscribe(retorno => {
     this.filme = retorno;
    });
  }

  salvarFilme():void{
    /*console.log('Nome: ', this.nome);
    console.log('Lançamento no Brasil: ', this.lancamento);
    console.log('Orçamento: ', this.orcamento);
    alert('Salvo com sucesso! ');*/

    this.filmesService.atualizar(this.filme).subscribe(retorno => {
      this.filme = retorno;
      this.filmesService.exibirMensagem(
        'SISTEMA',
        `${this.filme.nome} foi atualizado com sucesso! }`,
        'toast-success'
      );
      this.router.navigate(['/filmes']);
    });

  }
}
