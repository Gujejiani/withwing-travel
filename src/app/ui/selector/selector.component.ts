import { Component, Input, OnInit } from '@angular/core';
import { InputTypes } from 'src/app/models/inputTypes';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.scss']
})
export class SelectorComponent implements OnInit {


  @Input() multiSelectorItems: string[] =['haha'];
  @Input() labelText: string =''
  @Input() singleSelector: boolean =false
  @Input() inputType: InputTypes = 'radio'
  @Input() optionsSelector = false
  constructor() { }

  ngOnInit(): void {
    console.log(this.multiSelectorItems)
  }

   multiSelectCLicked(e: MouseEvent ){
    const input = e.target as HTMLInputElement
    console.log(input?.checked)
    if(input?.checked){
      // input.checked =false
    }
   }

}
