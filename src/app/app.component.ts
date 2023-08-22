import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Personne : {{person}} | Age : {{age}} | Adresse : {{address.street}} {{address.city}}</div>`,
  styles: []
})
export class AppComponent {
  person:string = 'John Doe'; 
  age:number = 30; 
  address:any = {street:'106 avenue Foch', city:'75008 Paris'}; 
}
