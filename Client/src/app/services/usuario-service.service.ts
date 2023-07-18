import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { JwtResponse } from '../models/jwt-response';
@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  url = 'http://localhost:4000/api/usuarios/crear'

  authSubject = new BehaviorSubject(false);
  private token : string= '';

  constructor(private http: HttpClient , private location :Location, private router:Router) { }

  registrar(user:Usuario):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.url,user).pipe(
      tap((res : JwtResponse)=>{
        if(res && res.dataUser){
          this.saveToken(res.accessToken, res.expireIn);
          this.router.navigateByUrl('/perfil')
          console.log(res);
        }
      })
    )
  }


  private saveToken(token:string , expireIn:string){
    localStorage.setItem("ACCESS_TOKEN",token);
    localStorage.setItem("EXPIRE_IN",expireIn);
    this.token = token
  }

}
