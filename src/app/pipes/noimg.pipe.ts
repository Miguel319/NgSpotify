import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "noimg"
})
export class NoimgPipe implements PipeTransform {
  transform(imgs: any[]): string {
    return (imgs.length > 0) ? imgs[0].url : 'assets/img/noimage.png';
  }
}
