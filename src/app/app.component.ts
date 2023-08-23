import { Component, OnInit } from '@angular/core';
import { saveAs } from 'file-saver'; // https://www.npmjs.com/package/file-saver
import { ReadingJsonService } from './readingJsonService';
import { Person } from './person';
import { PERSONS } from './mock-person';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <ul>
        <li *ngFor="let person of persons Personne">
          FullName: {{person.fullName}} | Age : {{person.age}} | Adresse : {{person.address}}
        </li>
      </ul>
    </div>
    <button (click)="save()">Save  disk</button>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  persons: Person[] = PERSONS;

  constructor(private readingJsonService: ReadingJsonService) {
  }

  ngOnInit(): void {
  }

  save() {
    console.log("save");
    const myJSON = JSON.stringify(this.persons);
    console.log(myJSON);
    var file = new File([myJSON], "c:/temp/hello world.json", {type: "text/plain;charset=utf-8"});
    saveAs(file);

    let persons = <Person[]>JSON.parse(myJSON);
    console.log(persons);
  }
}