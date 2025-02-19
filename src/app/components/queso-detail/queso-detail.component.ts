import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('QuesoDetailComponent initialized.');

    // Ensure scrolling to top when entering the detail page
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      console.log('Scrolled to top on init.');
    }, 50);

    // Get queso ID from route and fetch details
    const id = +this.route.snapshot.paramMap.get('id')!;
    console.log('Loading queso details for ID:', id);

    this.quesoService.getQuesobById(id).subscribe((queso) => {
      this.quesoDetail = queso;
      console.log('Queso detail loaded:', this.quesoDetail);
    });
  }

  goBack(): void {
    console.log('Volver button clicked.');
    window.scrollTo({ top: 0, behavior: 'auto' });
    this.router.navigate(['/']); // 👈 Adjust this route if needed
  }
}
