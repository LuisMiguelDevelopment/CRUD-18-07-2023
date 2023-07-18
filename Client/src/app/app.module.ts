import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule }from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IniciarSesionComponent } from './components/iniciar-sesion/iniciar-sesion.component';
import { FormsModule } from '@angular/forms';
import { PerfilComponent } from './components/perfil/perfil.component';
import { CrearUserComponent } from './components/crear-user/crear-user.component';

@NgModule({
  declarations: [
    AppComponent,
    IniciarSesionComponent,
    PerfilComponent,
    CrearUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
