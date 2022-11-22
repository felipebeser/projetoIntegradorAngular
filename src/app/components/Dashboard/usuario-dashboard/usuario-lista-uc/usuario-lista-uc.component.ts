import { Component, OnInit } from '@angular/core';
import { UnidadeCurricular } from 'src/app/models/UnidadeCurricular';
import { UnidadeCurricularService } from 'src/app/services/unidade-curricular.service';

@Component({
  selector: 'app-usuario-lista-uc',
  templateUrl: './usuario-lista-uc.component.html',
  styleUrls: ['./usuario-lista-uc.component.css']
})
export class UsuarioListaUcComponent implements OnInit {

  unidadesCurriculares: UnidadeCurricular[];

  loading: boolean = true;

  idUsuarioLogado : string;

  constructor(private unidadeCurricularService: UnidadeCurricularService ) { }

  ngOnInit(): void {
    this.idUsuarioLogado = localStorage.getItem("UsuarioId")!;
    this.unidadeCurricularService.ObterUnidadeCurricularPeloUsuarioIdSemestreAtual(this.idUsuarioLogado).subscribe(resultado => {
      this.unidadesCurriculares = resultado;
      this.loading = false;
    });
  }
}
