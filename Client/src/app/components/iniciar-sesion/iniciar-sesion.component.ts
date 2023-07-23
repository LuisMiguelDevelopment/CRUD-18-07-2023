import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-iniciar-sesion',
  templateUrl: './iniciar-sesion.component.html',
  styleUrls: ['./iniciar-sesion.component.css']
})
export class IniciarSesionComponent implements OnInit {

  id:number = 0;

  constructor(private _loginService: UsuarioServiceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  Login(frmLogin: NgForm) {
    this._loginService.login(frmLogin.value).subscribe(
      (res) => {
        this.router.navigateByUrl(`/perfil/${res.dataUser.id}`);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}