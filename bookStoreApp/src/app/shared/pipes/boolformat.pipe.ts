import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolformat'
})
export class BoolformatPipe implements PipeTransform {

  transform(value: unknown): unknown {
    return value ? 'Yes' : 'No';
  }

}
