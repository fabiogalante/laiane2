import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  // styleUrls: ['./alerts.component.css']
  styles: [
    `
   .highlight{
    background-color: yellow;
    font-weight: bold;
}
   `
  ]
})
export class AlertsComponent implements OnInit {


  valorAtual: string;
  valorSalvo: string;
  isMouseOver: boolean = false;


  botaoClicado() {
    alert('Botão clicado')
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = ((<HTMLInputElement>evento.target).value);
  }


  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver   
    console.log(this.isMouseOver);
  }


  salvarValor(valor) {
    this.valorSalvo = valor;
  }

  constructor() { }

  ngOnInit() {
  }

}
