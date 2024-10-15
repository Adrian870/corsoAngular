import { Component } from '@angular/core';

@Component({
  selector: 'app-esercizio1',
  standalone: true,
  imports: [],
  templateUrl: './esercizio1.component.html',
  styleUrl: './esercizio1.component.css'
})
export class Esercizio1Component {
name:string = "Adrian"
cognome: string = "Ciobotaru"
eta: number = 19
hobby: string = "Programmazione"
}
