import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit{
userId:string='';
usuario:any;


constructor(private route : ActivatedRoute, private _usuarioService : UsuarioServiceService) {}

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


}
