import { Component } from '@angular/core';
import { RodapeComponent } from '../rodape/rodape.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-membros',
  imports: [RodapeComponent, MenuComponent],
  templateUrl: './membros.component.html',
  styleUrl: './membros.component.css'
})
export class MembrosComponent {

}
