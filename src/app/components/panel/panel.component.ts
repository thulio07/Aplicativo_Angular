import { Component, EventEmitter, Output, OnDestroy} from '@angular/core';
import { Frase } from '../shared/frases.model';
import { Frases } from './frases-mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {
  public frases: Frase[] = Frases
  public round:number = 0
  public progress: number = 0
  public roundFrase!: Frase
  public response: String = ""
  public attempts: number = 3
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter
  
  constructor(){
    this.updateRound()
  }
  ngOnDestroy(){
   

  }
  update(resposta: Event){
    this.response = ((<HTMLInputElement>resposta.target).value)
    
  }
  check():void{
   
    if(this.roundFrase.frasePtBr == this.response){    
        
      this.round ++
      this.progress = this.progress + (100/this.frases.length)

      if(this.round === 4){
       this.encerrarJogo.emit('vitoria')

      }
      this.updateRound()


    }else{
      this.attempts--
      if(this.attempts === -1){
        this.encerrarJogo.emit('derrota')      }
    }

  }
  updateRound():void{
    this.roundFrase = this.frases[this.round]
    this.response = ""
  }

}  


