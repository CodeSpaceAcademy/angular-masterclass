import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'modifyText'
})
export class ModifyTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + '.';
  }

}
