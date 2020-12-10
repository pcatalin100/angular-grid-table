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
    console.log('onInit');
    this.personService.getPersonsDetails().subscribe({
      // check if persons[0] exists
      next: (persons) => {
        this.persons = persons;
        this.headers = Object.keys(persons[0]);
      },
    });
  }
  //for tests
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked() {
    this.headers.forEach((header) => {
      const cellsDOM = document.querySelectorAll(`.divCell.${header}`)!;
      const idCells = Array.from(cellsDOM).map((cell) => cell.clientWidth);
      cellsDOM.forEach((cell: HTMLElement) => {
        cell.style.width = `${Math.max(...idCells)}px`;
      });
    });
  }
}
