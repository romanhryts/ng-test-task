import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../../../models/IBook';

@Pipe({
  name: 'filterBooks'
})
export class FilterBooksPipe implements PipeTransform {

  transform(data: IBook[], filterBy: string, filterWord: string): IBook[] {
    let result: IBook[];
    switch (filterBy) {
      case 'name':
        result = data.filter(book => book.title.toLowerCase().includes(filterWord.toLowerCase()));
        break;
      case 'desc':
        result = data.filter(book => book.description.toLowerCase().includes(filterWord.toLowerCase()));
        break;
      default:
        result = data;
    }
    return result;
  }

}
