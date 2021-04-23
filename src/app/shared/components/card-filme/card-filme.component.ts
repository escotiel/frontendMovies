import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-filme',
  templateUrl: './card-filme.component.html',
  styleUrls: ['./card-filme.component.css']
})
export class CardFilmeComponent implements OnInit {

  @Input() foto:string;
  @Input() nomeFilme:string;
  @Input() lancamento:string;
  @Input() idFilme:number;
  @Input() orcamento:number;
  @Input() cartaz:boolean;


  constructor() { }

  ngOnInit(): void {
  }

}
