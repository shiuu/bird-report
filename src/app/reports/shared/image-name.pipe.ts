import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'imageName'})
export class ImageNamePipe implements PipeTransform {
  transform(value: string): string {
      return value.toLowerCase().replace(/ /g, '_');
  }
}
