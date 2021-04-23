import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  idFilme = 1;
  nomeFilme = 'Capitao America: O Primeiro Vingador';
  genero = 'Ação';
  lancamento = '2011-07-29';
  anuncio = `O filme ${this.nomeFilme}, está em cartaz!`;
  foto = 'assets/img/02.jpg';
  orcamento = 140000000;
  cartaz = true;

  constructor() {

    console.log('Nome do Filme: ', this.nomeFilme);
   }

  ngOnInit(): void {
  }

}
