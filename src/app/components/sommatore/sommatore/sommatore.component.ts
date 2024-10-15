import { Component, input } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sommatore',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sommatore.component.html',
  styleUrl: './sommatore.component.css'
})
export class SommatoreComponent {


somma:number = 0
num1:number = 0
num2: number =0
onBtnSomma(){
 this.somma=this.num1+this.num2
}

}
