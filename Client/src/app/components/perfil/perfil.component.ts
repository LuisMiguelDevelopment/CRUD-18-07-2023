import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
userId:number=0;
usuario:any;


constructor(private route : ActivatedRoute, private _usuarioService : UsuarioServiceService ,private router : Router) {}

ngOnInit(): void {
  this.userId = this.route.snapshot.params['id'];
  this.perfilUsuario(); 
}

perfilUsuario():void{
  this._usuarioService.getPerfil(this.userId).subscribe(
    (response)=>{
      this.usuario = response.dataUser;
    },
    (error)=>{
      console.log(error)
    }
  )
}

cerrarSesion():void{
  this._usuarioService.cerrarSesion();
  this.router.navigate(['/iniciar-sesion'])
}


}
