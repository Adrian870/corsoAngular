import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { error } from 'console';
import { IUserRegistered } from '../../../models/register';
@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {
  constructor(private route: ActivatedRoute, private userDTO:UserService){}
  id:any = '';
  userCreated: IUserRegistered={
    username: '',
    email: '',
    password: '',
    id: '',
    createdAt: ''
  }
  ngOnInit(){
    this.route.queryParams.subscribe((params) => {
    const userCreatedString = params['userCreated'];
    if (userCreatedString){
      try{
        this.userCreated = JSON.parse(userCreatedString) as IUserRegistered
      } catch (e) {
        console.error("ERRORE", e);
      }
    } else {
      console.warn('nessun dato trovato')
    }  
      
      this.id = this.route.snapshot.paramMap.get("id");
      this.userDTO.getById(this.id).subscribe({
        next:(res)=> {
          console.log(res)
        },
        error:(err)=> {
          console.error(err)
        }
      })
    })
  }
}
