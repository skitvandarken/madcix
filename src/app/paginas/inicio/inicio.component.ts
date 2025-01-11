import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { SliderComponent } from '../../layout/slider/slider.component';
import { NumerosComponent } from '../../layout/numeros/numeros.component';
import { ServicosComponent } from '../../layout/servicos/servicos.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { MembrosComponent } from '../../layout/membros/membros.component';
import { EventosComponent } from "../../layout/eventos/eventos.component";

@Component({
  selector: 'app-inicio',
  imports: [MenuComponent, RodapeComponent, MembrosComponent, SliderComponent, NumerosComponent, ServicosComponent, RodapeComponent, MembrosComponent, EventosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
