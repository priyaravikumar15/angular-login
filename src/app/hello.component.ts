import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<div class=""><p>HomePage</p></div>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HelloComponent  {
  @Input() name: string;
}
