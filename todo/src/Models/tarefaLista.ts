import { Tarefa } from "./tarefa";

export class TarefasLista {
    constructor(public usuario: string, private listaTarefas: Tarefa[] = []) {

    }
    get tarefas(): readonly Tarefa[] {
        return this.listaTarefas;
    }
    addTarefa(nomeTarefa: string,detalhe: string, data: string) {
        this.listaTarefas.push(new Tarefa(nomeTarefa,detalhe,data));
    }

}