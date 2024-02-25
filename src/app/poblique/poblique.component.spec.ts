import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PobliqueComponent } from './poblique.component';

describe('PobliqueComponent', () => {
  let component: PobliqueComponent;
  let fixture: ComponentFixture<PobliqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PobliqueComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PobliqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
