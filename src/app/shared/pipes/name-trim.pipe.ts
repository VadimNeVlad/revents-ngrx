import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameTrim',
})
export class NameTrimPipe implements PipeTransform {
  transform(name: string): string {
    return name.substr(0, 1);
  }
}
