import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {


valorAtual: string;


  botaoClicado() {
    alert('Botão clicado')
  }


  onKeyUp(evento: KeyboardEvent) {
     this.valorAtual = ((<HTMLInputElement>evento.target).value);    
  }

  constructor() { }

  ngOnInit() {
  }

}
