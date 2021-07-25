import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'msShort'
})
export class MsShortPipe implements PipeTransform {

  transform(value: number): Date {
    return new Date(value);
  }

}
