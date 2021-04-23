import { FilmesService } from './../../../services/filmes.service';
import { IFilme } from './../../../model/IFilme.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-filmes',
  templateUrl: './cadastrar-filmes.component.html',
  styleUrls: ['./cadastrar-filmes.component.css']
})
export class CadastrarFilmesComponent implements OnInit {

  /*nome:string;
  lancamento:string;
  orcamento:number;*/

  //usar a Interface IFilmes
  filme: IFilme = {
    nome: null,
    lancamento: null,
    orcamento: null
  };

  constructor(private filmesService: FilmesService, private router: Router) { }

  ngOnInit(): void {
  }

  salvarFilme():void{
    /*console.log('Nome: ', this.nome);
    console.log('Lançamento no Brasil: ', this.lancamento);
    console.log('Orçamento: ', this.orcamento);
    alert('Salvo com sucesso! ');*/

    this.filmesService.cadastrar(this.filme).subscribe(retorno => {
      this.filme = retorno;
      this.filmesService.exibirMensagem(
        'SISTEMA',
        `${this.filme.nome} foi cadastrado com sucesso. ID: ${this.filme.id}`,
        'toast-success'
      );
      this.router.navigate(['/filmes']);
    });

  }

}
