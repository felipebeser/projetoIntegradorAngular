import { Periodo } from "./Periodo";
import { Professor } from "./Professor";
import { Turno } from "./Turno";
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
