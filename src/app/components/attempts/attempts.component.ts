import { Component, Input, OnChanges} from '@angular/core';
import { Coracao } from '../shared/coracao.model';
@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnChanges{


  @Input() public attempts!: number
  
  coracoes: Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ]
  constructor(){
    
   
  }
  ngOnChanges(){
    if(this.attempts!== this.coracoes.length){
      let indice = this.coracoes.length - this.attempts
      this.coracoes[indice - 1].cheio = false

    }
    
      
  }

}
