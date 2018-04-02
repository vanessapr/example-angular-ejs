import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  initialData: any;

  constructor(
    private el: ElementRef
  ) {
    const native = this.el.nativeElement;
    this.initialData = native.getAttribute('initialData');
  }
}
