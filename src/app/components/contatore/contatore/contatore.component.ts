import { Component } from '@angular/core';

@Component({
  selector: 'app-contatore',
  standalone: true,
  imports: [],
  templateUrl: './contatore.component.html',
  styleUrl: './contatore.component.css'
})
export class ContatoreComponent {
  
  count:number = 0
  
  onBtnAum(){
    this.count ++;
  }
  onBtnDim(){
    this.count --;
  }

  onBtnReset(){
    this.count = 0
  }
}
  
