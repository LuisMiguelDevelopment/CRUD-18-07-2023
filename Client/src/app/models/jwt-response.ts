export interface JwtResponse{
    dataUser:{
        id:number
        Nombre:string,
        Correo:string,
        Contrasena:string
    };
    accessToken:string;
    expireIn:string
}