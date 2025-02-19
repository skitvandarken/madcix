import { Component, AfterViewInit} from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { MembrosComponent } from '../../layout/membros/membros.component';

@Component({
  selector: 'app-membrosmadcix',
  imports: [
    MenuComponent,
    RodapeComponent,
    MembrosComponent
  ],
  templateUrl: './membrosmadcix.component.html',
  styleUrl: './membrosmadcix.component.css'
})
export class MembrosmadcixComponent implements AfterViewInit  {

  ngAfterViewInit(): void {
    const sliderInner = document.querySelector('.slider-inner') as HTMLElement;
    const images = sliderInner.innerHTML;
    // Duplicate the images
    sliderInner.innerHTML += images; // Append the same images for a seamless effect
  }


}
