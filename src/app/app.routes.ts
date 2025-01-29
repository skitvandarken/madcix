import { Routes } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { SobreComponent } from './paginas/sobre/sobre.component';
import { ProdutosComponent } from './paginas/produtos/produtos.component';
import { SuporteComponent } from './paginas/suporte/suporte.component';
import { MembrosComponent } from './layout/membros/membros.component';

export const routes: Routes = [

{path: '', component: InicioComponent},
{path: 'inicio', component: InicioComponent},
{path: 'sobre', component: SobreComponent },
{path: 'produtos', component: ProdutosComponent},
{path: 'suporte', component: SuporteComponent },
{path: 'membros', component: MembrosComponent},
{path: 'suporte', component: SuporteComponent},


];
