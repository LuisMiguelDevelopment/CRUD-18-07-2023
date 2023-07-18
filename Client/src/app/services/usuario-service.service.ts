import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario';
import { JwtResponse } from '../models/jwt-response';
import { Location } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class UsuarioServiceService {

  url = 'http://localhost:4000/api/usuarios/crear/'
  url2 ='http://localhost:4000/api/usuarios/login/'
  url3 ='http://localhost:4000/api/usuarios/perfil/'

  authSubject = new BehaviorSubject(false);
  private token : string= '';

  constructor(private http: HttpClient ,private location:Location , private router:Router) { }

  registrar(user:Usuario):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.url,user).pipe(
      tap((res : JwtResponse)=>{
        if(res && res.dataUser?.Nombre){
          this.saveToken(res.accessToken, res.expireIn);
          this.router.navigateByUrl('/perfil')
          console.log(res);
        }
      })
    )
  }

  login(user:Usuario):Observable<JwtResponse>{
    return this.http.post<JwtResponse>(this.url2, user).pipe(tap(
      (res:JwtResponse)=>{
        if(res){
          this.saveToken(res.accessToken, res.expireIn );
          console.log(res);
          this.router.navigateByUrl('/perfil')
        }
      }
    ))
  }


  private saveToken(token:string , expireIn:string){
    localStorage.setItem("ACCESS_TOKEN",token);
    localStorage.setItem("EXPIRE_IN",expireIn);
    this.token = token
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('ACCESS_TOKEN');
    return !!token; 
  }

  

  getPerfil(id: string): Observable<any> {
    const urlPerfil = `${this.url3}${id}`;
    console.log('ID:', id);
    console.log('URL:', urlPerfil);
    return this.http.get<any>(urlPerfil);
  }
}



