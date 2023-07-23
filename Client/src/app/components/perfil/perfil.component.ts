import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  userId: number = 0;
  usuario: any;
  usuarioForm : FormGroup;

  modalSwitch:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private _usuarioService: UsuarioServiceService,
    private router: Router,
    private fb:FormBuilder
  ) {  
    this.usuarioForm = this.fb.group({
      Nombre:['',Validators.required],
      Correo:['',Validators.required]
    })
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.perfilUsuario();
  }

  perfilUsuario(): void {
    this._usuarioService.getPerfil(this.userId).subscribe(
      (response) => {
        this.usuario = response.dataUser;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  cerrarSesion(): void {
    this._usuarioService.cerrarSesion();
    this.router.navigate(['/iniciar-sesion']);
  }

  editarUsuario(): void {
    const usuarioData = {
      id: this.usuario.id,
      Nombre: this.usuarioForm.value.Nombre,
      Correo: this.usuarioForm.value.Correo,
      Contrasena: this.usuario.Contrasena // Asigna el valor actual de Contrasena
    };
  
    this._usuarioService.editarUsuario(this.userId.toString(), usuarioData).subscribe(
      (response) => {
        console.log("Usuario editado exitosamente");
      },
      (error) => {
        console.log('Error al editar', error);
      }
    );
  }

  openModal(){
    this.modalSwitch = true;    
  }
  cerrarModal(){
    this.modalSwitch = false;
  }

  
}
