import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-button',
  standalone: true,
  imports: [CommonModule],
  template: `
  <button 
    [ngStyle]="styles" 
    (click)="handleClick()"
    [type]="type">
    {{ text }}
  </button>
`,
  styles: [`
    button {
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
  `]
})
export class GenericButtonComponent {

  @Input() text: any = '';
  @Input() type: string = 'button';
  @Input() styles: { [key: string]: string } = {};
  @Output() action = new EventEmitter<void>();

  handleClick() {
    this.action.emit();
  }

}
