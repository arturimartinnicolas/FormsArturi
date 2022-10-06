import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

  usuarios: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  agregarUsuario($event: any): void {
    this.usuarios.push($event);
  }

}
