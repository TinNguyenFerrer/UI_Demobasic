import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'proper'
})
export class ProperPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): any {
    if(!value){
      return value
    }
    return value.charAt(0).toLocaleUpperCase() + value.substring(1).toLocaleLowerCase()
  }

}
