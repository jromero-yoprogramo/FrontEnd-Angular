import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-barra-de-navegacion',
  templateUrl: './barra-de-navegacion.component.html',
  styleUrls: ['./barra-de-navegacion.component.css']
})
export class BarraDeNavegacionComponent implements OnInit {

  public active : boolean = false

  constructor() { }
  ngOnInit(): void { }

  setActive() : void {
    this.active = !this.active
  }

}
