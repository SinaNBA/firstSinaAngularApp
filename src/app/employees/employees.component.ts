import { Component, OnInit } from '@angular/core';
import { PersonService } from './person.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  constructor(private _personService: PersonService) {

  }
  ngOnInit(): void {
    this.persons = this._personService.getData();
  }
  persons: any[] = [];
}
