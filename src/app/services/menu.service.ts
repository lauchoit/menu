import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private nouser = [
    {
      name: 'No registrado',
      icon: 'expand_more',
      subItem:
       [],
    },
    {
      name: 'Rendiciones',
      icon: 'expand_more',
      subItem:
       [
         {
          name : 'Resumen de Giros',
          url : '/rendiciones/resumen-de-giros'
         },
         {
          name : 'Rendiciones por Aprobación',
          url : '/rendiciones/rendiciones-por-aprobacion'
        },
       ],
    }
  ];
  private menuadministrador = [
    {
      name: 'Declaración de Gastos',
      icon: 'expand_more',
      subItem:
       [
         {
          name : 'Revizar Declaración Vigente',
          url : '/declaraciones-de-gastos/revizar-declaracion-vigente'
         },
         {
          name : 'Modificar Documentos Declarados Cerradas',
          url : '/declaraciones-de-gastos/modificar-documentos-declarados-cerradas'
        },
        {
          name : 'Enviar Declaraciones DAF',
          url : '/declaraciones-de-gastos/enviar-declaraciones-daf'
        },
       ],
    },
    {
      name: 'Rendiciones',
      icon: 'expand_more',
      subItem:
       [
         {
          name : 'Resumen de Giros',
          url : '/rendiciones/resumen-de-giros'
         },
         {
          name : 'Rendiciones por Aprobación',
          url : '/rendiciones/rendiciones-por-aprobacion'
        },
       ],
    }
  ];

  private menuotro = [
    {
      name: 'Rendiciones',
      icon: 'expand_more',
      subItem:
       [
         {
          name : 'Resumen de Giros',
          url : '/rendiciones/resumen-de-giros'
         },
         {
          name : 'Rendiciones por Aprobación',
          url : '/rendiciones/rendiciones-por-aprobacion'
        },
       ],
    }
  ];


  constructor() { }


menubar(tipo: string) {
  console.log(tipo);
}

seleccionMenu(tipo: string){
  let menu = null;
  if ( tipo === 'administrador' ){
     menu = this.menuadministrador;
  } else if (tipo === 'otro') {
     menu = this.menuotro;
  } else {
    menu = false;
  }
  return menu;
}
}
