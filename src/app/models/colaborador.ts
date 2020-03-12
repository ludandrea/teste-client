import { Guid } from "guid-typescript";
export class Colaborador {
    id: string;
    nome: string;
    registro: string;
    indicador: string;
    constructor() {
        this.id = Guid.create().toString();
    }
}