import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondToTime'
})
export class SecondToTimePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!isNaN(value)) {
      const hours = Math.floor(value / 3600);
      const minutes = Math.floor((value - hours * 3600) / 60);
      const seconds = value - (hours * 3600 + minutes * 60);

      return ('0' + hours).substr(-2) + ':'
        + ('0' + minutes).substr(-2) + ':'
        + ('0' + seconds).substr(-2);
    }
    return null;
  }

}
