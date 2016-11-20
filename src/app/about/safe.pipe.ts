import { Pipe, PipeTransform } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'safe'
})


export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}
  transform(url) {
    //var url = url.replace("watch?v=", "v/");
    return this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/v/rYgpFq_9LiM');
  }
} 