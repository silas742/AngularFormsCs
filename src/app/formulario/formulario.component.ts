import { Component } from '@angular/core';
import {Pessoa} from'../model/pessoa';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  EstilosParaBotao(){
    return {
      backgroundColor: '#228B22',
      padding: '8px',
      width: '20%',
      border: 'none',
      borderRadius: '4px'
    }
  }
  ObterClassesRodape(){
    return['rodape']
  }
  obterclassValor(){
    return{
    }
  }
  cursos = ['Analise de sistemas',
    'Eventos',
    'Gestão comercial',
    'Recursos humanos',
    'Gestão empresarial'];

    pessoa: Pessoa = new Pessoa();
salvar (alunoForm){
 this.pessoa.nome = alunoForm.value.nome;
 this.pessoa.Idade= alunoForm.value.idade;
 this.pessoa.curso = alunoForm.value.curso;
}

}
