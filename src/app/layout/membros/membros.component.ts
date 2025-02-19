import { Component, AfterViewInit} from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { RodapeComponent } from '../rodape/rodape.component';

@Component({
  selector: 'app-membros',
  imports: [
    MenuComponent,
    RodapeComponent
  ],
  templateUrl: './membros.component.html',
  styleUrl: './membros.component.css'
})
export class MembrosComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    const sliderInner = document.querySelector('.slider-inner') as HTMLElement;
    const images = sliderInner.innerHTML;

    // Duplicate the images
    sliderInner.innerHTML += images; // Append the same images for a seamless effect
  }

}
