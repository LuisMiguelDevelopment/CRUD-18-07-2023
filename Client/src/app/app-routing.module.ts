import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { CrearUsuarioComponent } from './components/crear-usuario/crear-usuario.component';
import { PerfilComponent } from './components/perfil/perfil.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'iniciar-sesion'},
  {path:'iniciar-sesion', component:IniciarSesionComponent},
  {path:'crear', component:CrearUsuarioComponent},
  {path:'perfil', component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
