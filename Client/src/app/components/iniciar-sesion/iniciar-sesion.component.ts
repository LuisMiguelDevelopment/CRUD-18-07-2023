import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit{

  constructor(private _loginService: UsuarioServiceService, private router:Router) {}

  ngOnInit(): void {}

  Login(form:any){
    this._loginService.login(form.value).subscribe(res=>{
      this.router.navigateByUrl('/perfil')
    })
  }
}
