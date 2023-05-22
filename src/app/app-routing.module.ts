import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { AyudaComponent} from './components/ayuda/ayuda.component';
import { EmergenciaComponent } from './components/emergencia/emergencia.component';
import {EmergenciaLoginComponent} from './components/emergencia-login/emergencia-login.component';
import {UbicacionComponent} from './components/ubicacion/ubicacion.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'verificar-correo', component: VerificarCorreoComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'ayuda', component:AyudaComponent},
  { path: 'emergencia', component:EmergenciaComponent },
  {path: 'emergencia-login', component:EmergenciaLoginComponent},
  {path: 'ubicacion', component : UbicacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
