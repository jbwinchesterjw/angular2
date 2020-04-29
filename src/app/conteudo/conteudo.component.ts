import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})

export class ConteudoComponent implements OnInit {

  //Construtor
  constructor() { }

  // Ao inciar
  ngOnInit() {
  }

  // Variavel
  msg = "Aprendnedo Angular";

  exibir = false;

  //vetor
  vetor = [
    "ana",
    "joao",
    "cleber",
    "danilo"
  ];
  //fouções
  quadrado(){
    this.exibir = !this.exibir;
  }
}
