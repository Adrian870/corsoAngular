import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HelloWorldComponent } from "./components/hello-world/hello-world.component";
import { Esercizio1Component } from "./components/esercizio_1/esercizio1/esercizio1.component";
import { ContatoreComponent } from './components/contatore/contatore/contatore.component';
import { SommatoreComponent } from "./components/sommatore/sommatore/sommatore.component";
import { NgifComponent } from "./components/ngif/ngif/ngif.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HelloWorldComponent, Esercizio1Component, ContatoreComponent, SommatoreComponent, NgifComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'corsoAngular';
  ngOnInit(){
   // alert("Ciao, benvenuto nel mondo di Angular!")
  }
  urlImmagine:string = "https://www.bing.com/images/search?view=detailV2&ccid=tQWmkscJ&id=626F6C41C00E5D0A8182A3083857EF5068D16E07&thid=OIP.tQWmkscJd05aeKM0qfKrTwHaEr&mediaurl=https%3a%2f%2fwww.mindinventory.com%2fblog%2fwp-content%2fuploads%2f2022%2f11%2fangular-15-1-1024x647.webp&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.b505a692c709774e5a78a334a9f2ab4f%3frik%3dB27RaFDvVzgIow%26pid%3dImgRaw%26r%3d0&exph=647&expw=1024&q=angular&simid=608016917300645966&FORM=IRPRST&ck=A3C2595620F2E4ED07FEAA21D5984701&selectedIndex=3&itb=0"
}
