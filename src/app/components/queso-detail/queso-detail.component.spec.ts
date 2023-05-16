import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuesoDetailComponent } from './queso-detail.component';

describe('QuesoDetailComponent', () => {
  let component: QuesoDetailComponent;
  let fixture: ComponentFixture<QuesoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuesoDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuesoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
