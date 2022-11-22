import { Periodo } from "./Periodo";
import { Professor } from "./professor";
import { Turno } from "./turno";
import { UnidadeCurricular } from "./UnidadeCurricular";

export class Grupo {
  id: number;
  descricao: string;
  dataInicio: Date;
  dataFim: Date;
  status: number;
  turnoId: number;
  turno: Turno;
  unidadeCurricularId: number;
  unidadeCurricular: UnidadeCurricular;
  periodoId: number;
  periodo: Periodo;
  professorId: number;
  professor: Professor;
}
