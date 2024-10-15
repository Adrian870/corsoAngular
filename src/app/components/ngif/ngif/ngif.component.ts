import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-ngif',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngif.component.html',
  styleUrl: './ngif.component.css'
})
export class NgifComponent {
isShow:boolean=true
isLoading:boolean= false

showText(){
  this.isShow = !this.isShow
}
Loading(){
  setTimeout(()=> {
    this.isLoading =! this.isLoading
  }, 3000)
}
ngOnInit(){
  this.Loading()  
}
}
