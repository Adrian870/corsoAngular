import { Component } from '@angular/core';
import { FormArray, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import { IRegister, IUserRegistered } from '../../models/register';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {
  error: string = "";
  userCreated:IUserRegistered={
    username: '',
    email: '',
    password: '',
    id: '',
    createdAt: ''
  }
  myForm = new FormGroup({
    username:new FormControl("",[Validators.required,Validators.minLength(3)]),
    email: new FormControl("",[Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  })

  constructor(private userDTO:UserService, private router: Router){}

  sendData(){
    let body:any = {
      username: this.myForm.get('username')?.value,
      email: this.myForm.get("email")?.value,
      password: this.myForm.get('password')?.value,
    } 
    if(this.myForm.valid){
      this.userDTO.registrationUser(body).subscribe({
        next: (res: IUserRegistered) => {
          this.userCreated = res
          this.router.navigate(['/dettagli', this.userCreated.id], {
          queryParams: { userCreated: JSON.stringify(this.userCreated) },
          });
 
          console.log('utente registrato',res)
        },
        error:(err) => {
          if(err.status == 400){
            this.error = "Note: Only defined users succed registration"
          }
        }
      })
    }else{
      console.error('qualcosa è andato storto nella compilazione del form')
    }
  }


}
