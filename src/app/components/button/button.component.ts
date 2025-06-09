import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input({required:true}) title!: string
  @Output() buttonClicked = new EventEmitter<void>();

  onButtonClicked(){
    console.log(this.buttonClicked)
    this.buttonClicked.emit;
  }




}
