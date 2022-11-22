import { Oferta } from "./Oferta";
import { Usuario } from "./usuario";

export class Estudante {
  id: number;
  dataCadastro: Date;
  dataTrancamento: Date;
  dataFormatura: Date;
  status: number;
  usuarioId: number;
  usuario: Usuario;
  ofertaId: number;
  oferta: Oferta;
}
