import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { SpecsComponent } from '../../layout/specs/specs.component';
import { AderirComponent } from '../../layout/aderir/aderir.component';

@Component({
  selector: 'app-suporte',
  imports: [
    MenuComponent,
    RodapeComponent,
    SpecsComponent,
    AderirComponent
    
],
  templateUrl: './suporte.component.html',
  styleUrl: './suporte.component.css'
})
export class SuporteComponent {

}
