import { Component, OnInit } from '@angular/core';
import { PersonService } from '../employees/person.service';

@Component({
  selector: 'app-personDetail',
  templateUrl: './personDetail.component.html',
  styleUrls: ['./personDetail.component.scss'],
})
export class PersonDetailComponent implements OnInit {
  persons: any[] = [];
  constructor(private _personService: PersonService) {}

  ngOnInit() {
    this.persons = this._personService.getData();
  }
}
