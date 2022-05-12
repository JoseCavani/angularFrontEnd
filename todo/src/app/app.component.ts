import { Component } from "@angular/core";
import { Tarefa } from "src/Models/tarefa";
import { TarefasLista } from "src/Models/tarefaLista";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  private list = new TarefasLista("Senac", [
    new Tarefa("Estudar HTML","detalhe","adsa")
      ]);
    get username(): string {
      return this.list.usuario; 
     }
     get itemCount(): number {
       return this.list.tarefas.filter(item=> !item.completo).length;  
      }
      get items(): readonly Tarefa[] {
        return this.list.tarefas.filter(item =>!item.completo);
      }
      
      addTarefa(nomeTarefa: string,detalhe: string, data: string) {
        if (nomeTarefa != "") {
          this.list.addTarefa(nomeTarefa,detalhe,data);
        }
      }
      showComplete: boolean = false;

    }