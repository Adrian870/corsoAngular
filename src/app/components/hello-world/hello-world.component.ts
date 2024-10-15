import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-hello-world',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css'
})
export class HelloWorldComponent {
message:string = "Hello world";
name: string = "Elio"
count: number = 0
ngOnInit(){
  console.log("Sono stato avviato")
}
ngOnChange(){
  console.log("Sono stato modificato")
}
  saluta(){
    alert("Ciao compa!")
  
  }}
