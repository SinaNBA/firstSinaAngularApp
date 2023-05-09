import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent {
  persons = [
    { name: 'Michael', city: 'Slaglse' },
    { name: 'Sina', city: 'Børkop' },
    { name: 'Atieh', city: 'Børkop' },
  ];
}
