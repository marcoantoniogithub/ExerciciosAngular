import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // nomes = ['marco','joao','antonio','augusto'];
  // nomesFiltrados;

  // buscar(valor:string){

  // this.nomesFiltrados = [];
  // for (let i = 0; i < this.nomes.length; i++) {
  //   if(this.nomes[i].toLocaleLowerCase().includes(valor.toLocaleLowerCase())){
  //     this.nomesFiltrados.push(this.nomes[i]);
  //   }
  // }

  // let temp = [];
  // this.nomes.forEach(buscarItem);
  // function buscarItem(nome){
  //   if(nome.toLocaleLowerCase().includes(valor.toLocaleLowerCase())){
  //     temp.push(nome);
  //   }
  // }
  // this.nomesFiltrados = temp;
  // this.nomesFiltrados = this.nomes.filter(nome => {
  //   return  nome.toLowerCase().includes(valor.toLowerCase());
  // });

  //   this.nomesFiltrados = this.nomes.filter(
  //     nome => nome.toLowerCase().includes(valor.toLowerCase())
  //   );
  // }
  resposta: any;
  retorno : any;
  pessoas: Array<any> = [
    {id:1, nome:"marco", salario:100},
    {id:2, nome:"joao", salario:200},
    {id:3, nome:"antonio", salario:300},
    {id:4, nome:"augusto", salario:400},
    {id:5, nome:"pedro", salario:500}
  ]

  getValorTotal(): Number {
    return this.pessoas.reduce((soma,pessoa) => soma + pessoa.salario, 0);
  }

  buscarId(id) {
    this.retorno = this.pessoas.find(pessoa => pessoa.id == id);
  }

  aumentarSalario(percentual){
    this.pessoas.map(pessoa => {
      pessoa.salario += pessoa.salario * percentual/100
    });
  }

  verificarSalario(valor: number){
    return this.pessoas.every(pessoa => pessoa.salario > valor);
  }

  buscaCampos(criterio:string){
    debugger;
    let a:any = this.pessoas.filter((pessoa) => {
      Object.keys(pessoa).some(id => pessoa[id].toString().includes(criterio))
    });
    return a;
  }


}
