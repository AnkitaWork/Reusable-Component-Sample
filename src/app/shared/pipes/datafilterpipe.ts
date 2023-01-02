//External imports
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'dataFilter',
})

export class DataFilterPipe implements PipeTransform {
  searchValue: any;
  transform(array: any[], query: string, searchFilterData:any): any {
    if (query) {
      const searchValue = searchFilterData;
      // filter our data
      const temp = array?.filter((d) => d[searchValue]?.replace(/\s+/g, '').toLowerCase()?.indexOf(query?.replace(/\s+/g, '')?.toLowerCase()) !== -1 || !searchValue);
      return temp;
    } else {
      return array;
    }
  }
}
