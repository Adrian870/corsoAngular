import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-form-user',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-user.component.html',
  styleUrl: './form-user.component.css'
})
export class FormUserComponent {
[x: string]: any;
utente = {
  nome: '',
  cognome: '',
  email:'',
  password:'',


};
nome: any;
email:any;

onSubmit(){
  console.log(this.utente)
}
}
