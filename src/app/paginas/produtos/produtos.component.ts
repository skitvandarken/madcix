import { Component } from '@angular/core';
import { MenuComponent } from '../../layout/menu/menu.component';
import { RodapeComponent } from '../../layout/rodape/rodape.component';
import { SpecsComponent } from '../../layout/specs/specs.component';
import { PricingComponent } from '../../layout/pricing/pricing.component';

@Component({
  selector: 'app-produtos',
  imports: [
    MenuComponent,
    RodapeComponent,
    SpecsComponent,
    PricingComponent
    
],
  templateUrl: './produtos.component.html',
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

}
