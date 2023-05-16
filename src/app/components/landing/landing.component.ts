import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  private id: string = 'qDuKsiwS5xw';
  //slides = [{'image': '/assets/queseria.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},{'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}];
  constructor(public sanitizer: DomSanitizer) {}
  title = 'La Queseria de Azu';

  @Input() videoId?: string;

  ngOnInit(): void {}

  getSourceURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://www.youtube.com/embed/3_Yd6tjJKSo?start=290'
    );
  }
}
