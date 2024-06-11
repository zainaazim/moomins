import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetoCardComponent } from './veto-card.component';

describe('VetoCardComponent', () => {
  let component: VetoCardComponent;
  let fixture: ComponentFixture<VetoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VetoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VetoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
