import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-data-binding',
  templateUrl: './twoway-data-binding.component.html',
  styleUrls: ['./twoway-data-binding.component.css']
})
export class TwowayDataBindingComponent implements OnInit {

nome: string = 'abc';

  constructor() { }

  ngOnInit() {
  }

}
