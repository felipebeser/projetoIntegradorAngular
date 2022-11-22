import { Periodo } from "./Periodo";

export class DiaLetivo {
    id: number;
    data: Date;
    status: number;
    periodoId: number;
    periodo: Periodo;
}