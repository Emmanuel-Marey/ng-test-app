import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
  })
export class ReadingJsonService {
    private jsonURL = 'assets/sample.json';

    constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            console.log("ReadingJsonService");
            console.log(data);
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get(this.jsonURL);
    }
}