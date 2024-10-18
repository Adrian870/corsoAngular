import { Component } from '@angular/core';
import { HelloWorldComponent } from '../../components/hello-world/hello-world.component';
import { UserComponent } from '../../components/user-components/user/user.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [HelloWorldComponent, UserComponent, RouterModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  messaggio: string = 'Ciao dal parent';
  prodotti = [
    {
      prodotto: "coca cola",
      prezzo: "2 euro",
    },
    {
      prodotto: "spazzolino",
      prezzo: "1 euro"    },
    {
      prodotto:"pannolini",
      prezzo:"12 euro"
    }
  ]



} 
