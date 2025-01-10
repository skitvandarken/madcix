import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { SliderComponent } from '../../layout/slider/slider.component';
import { NumerosComponent } from '../../layout/numeros/numeros.component';
import { ServicosComponent } from '../../layout/servicos/servicos.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';

@Component({
  selector: 'app-inicio',
  imports: [MenuComponent, SliderComponent, NumerosComponent, ServicosComponent, RodapeComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
