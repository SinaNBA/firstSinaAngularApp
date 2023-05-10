import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonService {
  getData() {
    return [
      { id: 1, name: 'Michael', city: 'Slaglse' },
      { id: 2, name: 'Sina', city: 'Børkop' },
      { id: 3, name: 'Atieh', city: 'Børkop' },
    ];
  }
  constructor() {}
}
