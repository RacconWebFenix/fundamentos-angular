import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicaPor',
})
export class MultiplicaPorPipe implements PipeTransform {
  transform(value: number, multiplicator: number): unknown {
    return value * multiplicator;
  }
}
