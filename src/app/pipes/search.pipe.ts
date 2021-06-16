import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    if(!texto) return lista

    return lista.filter(product => product.product_name.toUpperCase().includes(texto.toUpperCase()))
  }

}
