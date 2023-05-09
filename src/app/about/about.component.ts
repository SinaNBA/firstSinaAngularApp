import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements AfterViewInit {
  constructor() {}

  about = 'My first app about!';
  firstName = 'Sina';
  lastName = 'NB';
  flag = false;
  cl1 = 'cl1';
  color = 'red';
  hide = false;
  fullName = 'Sina NB';
  @ViewChild('ViewChildInput', { static: false }) myInput!: ElementRef;
  @Input('parentData') public name!: string;
  @Output() public childData = new EventEmitter();
  ngAfterViewInit(): void {
    this.myInput.nativeElement.value = 'SinaNB';
  }

  show(): void {
    this.hide = !this.hide;
  }

  onClick(e: HTMLInputElement): void {
    alert(e.value);
  }

  callEvent(): void {
    this.childData.emit('Data form child component!');
  }

  ngIfTest(): void {
    this.flag = !this.flag;
  }
}
