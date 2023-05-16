import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Queso } from '../../interface/queso';
import { QuesoService } from '../../services/queso.service';

@Component({
  selector: 'app-queso-detail',
  templateUrl: './queso-detail.component.html',
  styleUrls: ['./queso-detail.component.scss'],
})
export class QuesoDetailComponent implements OnInit {
  quesoDetail: Queso | undefined;

  constructor(
    private quesoService: QuesoService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log(id);
    this.quesoService.getQuesobById(id).subscribe((queso) => {
      this.quesoDetail = queso;
      console.log(this.quesoDetail);
    });
  }
}
