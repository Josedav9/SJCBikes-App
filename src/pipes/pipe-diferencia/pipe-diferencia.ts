import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the PipeDiferenciaPipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'pipeDiferencia',
})
export class PipeDiferenciaPipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
   transform(value:number, arg:number): string {
     let fecha = new Date( value *1000 );
     let fecha2 = new Date( arg *1000 );
     let hora = fecha2.getHours()-fecha.getHours();
     let minutos:any = fecha2.getMinutes()-fecha.getMinutes();
     if( minutos < 10 ){
       minutos = '0'+minutos;
     }
     let segundos:any = fecha2.getSeconds()-fecha.getSeconds();
     if( segundos <10 ){
       segundos = '0'+segundos;
     }
     return hora+":"+minutos+":"+segundos;
   }
}
