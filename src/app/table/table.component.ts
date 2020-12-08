import { Component, OnInit } from '@angular/core';
import { PersonDetails } from '../data/person-details';
import { PersonService } from '../data/person.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  persons: PersonDetails[] = [];
  headers: string[] = [];
  constructor(private personService: PersonService) {}

  ngOnInit(): void {
    this.personService.getPersonsDetails().subscribe({
      next: (persons) => {
        this.persons = persons;
      },
    });
  }
}
