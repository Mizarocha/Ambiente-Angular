import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 count = 0;
 nome ='Artemiza Rocha';
 text ='';
 


pessoas =[
   {
     nome:"Artemiza",
     sobrenome:"Rocha"
   },
   {
    nome:"Leyliane",
     sobrenome:"Almeida"
   },
   {
    nome:"Elzanir",
    sobrenome:"Gonçalves"
   },
   {
    nome:"Custodio",
    sobrenome:"Santos"
   }
 ];

constructor() {

}

ngOnInit() {
  console.log(this.pessoas);
  let interval = setInterval(() => {
    this.count++;
    if (this.count === 10){
      clearInterval(interval);
    }
  }, 1000)
}

 clicou(nome: string): void {
  console.log('clicou em mim , nome')

}

}
