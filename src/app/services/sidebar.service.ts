import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: any = [
    { path: '', title: 'Inicio' },
    { path: 'conocenos', title: 'Conócenos' },
    { path: 'servicios', title: 'Servicios' },
    { path: 'terapia', title: 'Terapia' },
    { path: 'contacto', title: 'Contacto' },
  ];
}
