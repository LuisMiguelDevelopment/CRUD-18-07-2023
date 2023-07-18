import { Component , OnInit} from '@angular/core';
import { UsuarioServiceService } from 'src/app/services/usuario-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

constructor(private _usuarioService: UsuarioServiceService , private router:Router) {}

ngOnInit():void{}

Registro(form:any){
  this._usuarioService.registrar(form.value).subscribe(res=>{
   this.router.navigateByUrl('/perfil')
  });
}

}
