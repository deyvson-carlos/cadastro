import { Routes } from '@angular/router';
import { CadastroContatoComponent } from './pages/cadastro-contato/cadastro-contato.component';
import { ConsultaContatoComponent } from './pages/consulta-contato/consulta-contato.component';

export const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroContatoComponent },
  { path: 'consulta', component: ConsultaContatoComponent }
];
