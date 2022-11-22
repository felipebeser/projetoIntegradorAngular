import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { DiaLetivoService } from 'src/app/services/dia-letivo.service';

@Component({
  selector: 'app-usuario-calendario-academico',
  templateUrl: './usuario-calendario-academico.component.html',
  styleUrls: ['./usuario-calendario-academico.component.css']
})
export class UsuarioCalendarioAcademicoComponent implements OnInit {

  idUsuarioLogado : string;
  cdiasLetivos: any;
  loading: boolean = true;

  minDate: any =  "2022-11-01T18:30:00.000Z"; 
  maxDate: any =  "2022-11-30T18:30:00.000Z";

  diasFeriados : Date[];
  diasLetivos  : Date[];
  inicioTerminoPeriodo  : Date[];
  sabadoLetivo  : Date[];
  recessoInstitucional  : Date[];
  recessoCopa : Date[];
  diasEspeciais: {[key: string] : Date[]}

  constructor(private diaLetivoService: DiaLetivoService) { }

  ngOnInit(): void {
    
    this.idUsuarioLogado = localStorage.getItem("UsuarioId")!;
    this.diaLetivoService.ObterCalendarioSemestreAtualByUsuarioId(this.idUsuarioLogado).subscribe(resultado => {
      this.cdiasLetivos = resultado;
      this.loading = false;
    }); 

    this.diasFeriados = [new Date('11/02/2022'),new Date('11/15/2022'),new Date('11/20/2022')];
    this.diasLetivos = [new Date('11/01/2022'), new Date('11/03/2022'), new Date('11/04/2022')];
    this.inicioTerminoPeriodo = [new Date('11/01/2022'),new Date('11/30/2022')];
    this.sabadoLetivo = [new Date('11/05/2022'),new Date('11/12/2022'),new Date('11/19/2022'),new Date('11/26/2022')];
    this.recessoInstitucional = [new Date('11/14/2022')];
    this.recessoCopa = [new Date('11/24/2022'), new Date('11/28/2022')];

    this.diasEspeciais = { 'diaFeriado': this.diasFeriados,
      'diaLetivo': this.diasLetivos,
      'inicioTerminoPeriodo': this.inicioTerminoPeriodo,
      'sabadoLetivo': this.sabadoLetivo,
      'recessoInstitucional': this.recessoInstitucional,
      'recessoCopa': this.recessoCopa
      }

  }

  dateClass() {
    return (date: Date): MatCalendarCellCssClasses => {
      for(let key of Object.keys(this.diasEspeciais)){
        for(let value of this.diasEspeciais[key]){
            if(value.toDateString() === date.toDateString()){
                return key;
            }
        }
    }
    return ''
      // const highlightDate = this.datesToHighlight
      //   .map(strDate => new Date(strDate))
      //   .some(d => d.getDate() === date.getDate() && d.getMonth() === date.getMonth() && d.getFullYear() === date.getFullYear());
      //return highlightDate ? 'special-date' : '';
    };
  }

}
