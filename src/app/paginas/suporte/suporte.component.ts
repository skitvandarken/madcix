import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { SpecsComponent } from '../../layout/specs/specs.component';

@Component({
  selector: 'app-suporte',
  imports: [
    MenuComponent,
    RodapeComponent,
    SpecsComponent
    
],
  templateUrl: './suporte.component.html',
  styleUrl: './suporte.component.css'
})
export class SuporteComponent {

}
