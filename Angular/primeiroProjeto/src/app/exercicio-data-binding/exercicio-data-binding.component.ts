import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-data-binding',
  templateUrl: './exercicio-data-binding.component.html',
  styleUrls: ['./exercicio-data-binding.component.scss']
})
export class ExercicioDataBindingComponent implements OnInit {

  constructor() {
    setTimeout(()=>{
      this.isDisabled = false;
    },4000);
   }

  ngOnInit(): void {
  }

  textoAcessibilidade = "Um texto acessivel" 
  imageURL = "https://i.pinimg.com/736x/84/48/c8/8448c8666642b94395a81945bf2af015.jpg"

  inicialVar = "Insira um texto "

  isDisabled = true
  getImageURL(){
    return this.imageURL
  }
}
