
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `
             <p> Parent Component! </p>

             <app-child [parent]="parent"></app-child>

             `
})
export class ParentComponent implements OnInit {

  parent: string = '';

  constructor() { }

  ngOnInit() {

    this.parent = "Message from parent component"
  }

}
