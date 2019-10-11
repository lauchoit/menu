import { Injectable } from '@angular/core';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private tres = [
    {
      name: 'que Bonito',
      icon: 'expand_more',
      subItem:
       [],
    },
    {
      name: 'Segundo',
      icon: 'expand_more',
      subItem:
       [
         {
          name : 'subMenu2.1',
          url : '/rendiciones/resumen-de-giros'
         },
         {
          name : 'subMenu2.2',
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


  constructor() {}



menubar(tipo: string) {
  console.log(tipo);
}

removeDuplicates(arrayIn) {
  const arrayOut = [];
  arrayIn.forEach(item=> {
    try {
      if (JSON.stringify(arrayOut[arrayOut.length-1].name) !== JSON.stringify(item.name)) {
        arrayOut.push(item);
      }
    } catch(err) {
      arrayOut.push(item);
     }
  })
  return arrayOut;
}

seleccionMenu(roles: string[]) {

  const menuGlobal: any[] = [];
  let menu: any[] = [];
  for (const key in roles) {
    if (roles.hasOwnProperty(key)) {
      const rol = roles[key];
      for (const option of this.generateMenu(rol)) {
        menuGlobal.push(option);
      }
    }
  }
  menu = this.removeDuplicates(menuGlobal);

  return menu;

}

generateMenu (tipo) {
  let menu = null;
  if ( tipo === 'administrador' ) {
     menu = this.menuadministrador;
  } else if (tipo === 'otro') {
     menu = this.menuotro;
  } else if (tipo === 'tres') {
    menu = this.tres;
  } else {
    menu = false;
  }
  return menu;
}
}
