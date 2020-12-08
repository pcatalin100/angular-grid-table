import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonDetails } from './person-details';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  private url = 'https://next.json-generator.com/api/json/get/EyGmGt-sF';
  constructor(private http: HttpClient) {}

  getPersonsDetails(): Observable<PersonDetails[]> {
    return this.http
      .get<PersonDetails[]>(this.url)
      .pipe(tap((data) => console.log(data)));
  }
}
