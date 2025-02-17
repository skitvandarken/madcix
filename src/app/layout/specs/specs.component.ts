import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RodapeComponent } from '../rodape/rodape.component';

@Component({
  selector: 'app-specs',
  imports: [
    MenuComponent,
    RodapeComponent
  ],
  templateUrl: './specs.component.html',
  styleUrl: './specs.component.css'
})
export class SpecsComponent {

}
