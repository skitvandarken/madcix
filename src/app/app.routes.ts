import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { AcercaComponent } from './paginas/acerca/acerca.component';
import { RequisitosComponent } from './paginas/requisitos/requisitos.component';

export const routes: Routes = [

{path: '', redirectTo: 'inicio', pathMatch: 'full'},
{path: 'inicio', component: InicioComponent},
{path: 'acerca', component: AcercaComponent},
{path: 'requisitos', component: RequisitosComponent}

];
