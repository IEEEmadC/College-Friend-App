export interface UserCustom {
  key?: string;
  email: string;
  estado : string;
  metodo : string;
  nombre: string;
  reputacion: string;
  rol: string;
  telefono: string;
  configuracion : {
    buscando : boolean;
    notificaciones : boolean;
  }
}