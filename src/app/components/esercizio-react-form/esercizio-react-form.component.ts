import { Component } from '@angular/core';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-esercizio-react-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './esercizio-react-form.component.html',
  styleUrl: './esercizio-react-form.component.css'
})
export class EsercizioReactFormComponent {

  myForm = new FormGroup({
    nome:new FormControl("",[Validators.required,Validators.minLength(3)]),
    cognome: new FormControl("", [Validators.required]),
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)]),
    num: new FormArray([], Validators.required),
  })

  get numeri(){
    return this.myForm.get('num') as FormArray
  }

  addNumero(){
    this.numeri.push(new FormControl(''))
  }

  sendData(){
    if(this.myForm.valid){
      console.log(this.myForm.value)
    }else{
      console.error('qualcosa è andato storto nella compilazione del form')
    }
  }

}
