import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newsHeadlines'
})
export class NewsHeadlinesPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(' ');
  }

}
