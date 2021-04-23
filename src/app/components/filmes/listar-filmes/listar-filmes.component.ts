import { IFilme } from './../../../model/IFilme.model';
import { FilmesService } from './../../../services/filmes.service';
import { Component, OnInit } from '@angular/core';
//import { runInThisContext } from 'node:vm';

@Component({
  selector: 'app-listar-filmes',
  templateUrl: './listar-filmes.component.html',
  styleUrls: ['./listar-filmes.component.css']
})
export class ListarFilmesComponent implements OnInit {

  //arrays
  listaStrings:string[] = ['Primeiro item','Segundo Item', 'Terceiro item'];
  listaNumeros:number[] = [15,15.6,100];

//objeto
  objetoModelo = {
    nome: 'Robson Escotiel',
    idade: 40,
    altura: 1.75,
    graduado: true
  };

  //array de objetos --> any aceita qq tipo de dados
  listaFilmes: IFilme[]=[];

  constructor(private filmeService: FilmesService) {

   /* //usando for para exibir o conteúdo da lista
    for (let item of this.listaStrings){          //let cria variáveis dentro do cabeçalho do método que podem sofrer alterações durante execução
      console.log(item);
    }
    for (const item of this.listaNumeros){          //const cria variáveis dentro do cabeçalho do método que não sofrem alterações (boa prática)
      console.log(item);
    }

    //exibindo conteúdo dos objetos
    console.log(this.objetoModelo); //imprime tudo
    console.log(this.objetoModelo.nome); //imprime a propriedade nome apenas*/
  }

  ngOnInit(): void {
    this.carregarFilmes();
  }

  //método de carregar produtos do backend
  carregarFilmes():void{
    this.filmeService.buscarTodos().subscribe(retorno=>{
      this.listaFilmes = retorno;
    });
  }

  deletar(filme:IFilme):void{
    this.filmeService.excluir(filme.id).subscribe(()=> {
      this.filmeService.exibirMensagem(
        'SISTEMA',
        `${filme.nome} foi excluido com sucesso!`,
        'toast-error'
      );
      this.carregarFilmes();
    });
  }

}
