import { Component, OnInit } from '@angular/core';
import { QuesoService } from 'src/app/services/queso.service';
import { Queso } from '../../interface/queso';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
})
export class Page2Component implements OnInit {
  quesos: Queso[] = [];

  constructor(private quesoService: QuesoService) {}

  ngOnInit(): void {
    this.quesoService.getQuesos().subscribe(quesos => {
      this.quesos = quesos;
    });
  }

  onCardClick(event: Event) {}
}
