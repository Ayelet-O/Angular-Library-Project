import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'my'
})
export class MyPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return value.substring(0,1)+'.';
  }

}
