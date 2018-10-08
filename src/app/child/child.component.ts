
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
            <p> Child Component </p>
            
            <div>Inside child component: 

            <span class="txt-color">{{parentName}}</span>

            </div>
            
            `
})
export class ChildComponent implements OnInit {

  @Input('parent') parentName: string;

  constructor() { }

  ngOnInit() {
  }

}
