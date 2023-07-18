import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.component.html',
  styleUrls: ['./crear-user.component.css']
})
export class CrearUserComponent implements OnInit {


  constructor(private _usuarioService: UsuarioServiceService , private router:Router) {}

  ngOnInit():void{}

  Registro(form:any){
    this._usuarioService.registrar(form.value).subscribe(res=>{
     this.router.navigateByUrl('/perfil')
    });
  }

}
