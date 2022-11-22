import { Component, OnInit } from '@angular/core';
import { RegistroAvaliacao } from 'src/app/models/RegistroAvaliacao';
import { UnidadeCurricular } from 'src/app/models/UnidadeCurricular';
import { RegistroAvaliacaoService } from 'src/app/services/registro-avaliacao.service';
import { UnidadeCurricularService } from 'src/app/services/unidade-curricular.service';


@Component({
  selector: 'app-conceitos-feedbacks',
  templateUrl: './conceitos-feedbacks.component.html',
  styleUrls: ['./conceitos-feedbacks.component.css']
})
export class ConceitosFeedbacksComponent implements OnInit {

  unidadesCurriculares: UnidadeCurricular[];
  registrosAvaliacao: RegistroAvaliacao[];
  registrosAvaliacaoPeriodoAtual: {[key: number] : RegistroAvaliacao[]};
  loading: boolean = true;
  idUsuarioLogado : string;

  constructor(private registroAvaliacaoService : RegistroAvaliacaoService, private unidadeCurricularService: UnidadeCurricularService) { }

  ngOnInit(): void {
    this.idUsuarioLogado = localStorage.getItem("UsuarioId")!;
    this.unidadeCurricularService.ObterUnidadeCurricularPeloUsuarioIdSemestreAtual(this.idUsuarioLogado).subscribe(resultado => {
      this.unidadesCurriculares = resultado;
      this.loading = false;
    });
    this.registroAvaliacaoService.ObterRegistrosAvaliacaoPeloUsuarioId(this.idUsuarioLogado).subscribe(resultado => {
      this.registrosAvaliacao = resultado;
      this.loading = false;
    }); 
    for(let uc of this.unidadesCurriculares){
      this.registroAvaliacaoService.ObterRegistrosPeriodoAtualFilterByUsuarioIdByUCId(this.idUsuarioLogado, uc.id).subscribe(resultado => {
        for(let result of resultado){
          this.registrosAvaliacaoPeriodoAtual[uc.id].push(result);
        }
      }); 
    }
    this.loading = false;
    
  }

}
