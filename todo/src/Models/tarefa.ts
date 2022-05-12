export class Tarefa{
    constructor(nomeTarefaVal: string, detalhe: string,data: string) {
        this.nomeTarefa = nomeTarefaVal;
        this.completo = false; 
        this.detalhe = detalhe;
        this.data = data;
     }
        nomeTarefa: string;
        completo: boolean;
        detalhe: string;
        data: string;
    }