import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../dashboard/dashboard.component.css']
})
export class HeaderComponent implements OnInit {

  idUsuarioLogado = localStorage.getItem("UsuarioId");
  nomeUsuarioLogado = localStorage.getItem("NomeUsuarioLogado");
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  EfetuarLogout(): void {
    localStorage.clear();
    this.router.navigate(["usuarios/loginusuario"]);
  }

}
