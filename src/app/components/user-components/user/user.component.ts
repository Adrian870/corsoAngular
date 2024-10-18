import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { IUser } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DetailComponent } from '../../detail/detail/detail.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  route:any;
constructor(private userDTO: UserService, private router: Router){}
userDetail: IUser[] = []

goToDetail(id: number){
 this.router.navigate(['/dettagli', id])
}
ngOnInit(){
  this.userDTO.getUser(1,10).subscribe({
    next: (response: IUser) => {
      this.userDetail = response.data;
      console.log(response.data);
    },
    error:(err) => {
      console.error(err);
    }
  })
}
}
