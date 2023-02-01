import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public jogoEmAndamento: boolean = true
  public tipoEncerramento!:any

  public encerrarJogo(tipo: String): void{
    
    this.jogoEmAndamento = false
    this.tipoEncerramento = tipo
  }
  public reiniciarJogo(){
    this.jogoEmAndamento = true
    this.tipoEncerramento = undefined
  }
}
