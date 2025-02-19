import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AderirComponent } from './aderir.component';

describe('AderirComponent', () => {
  let component: AderirComponent;
  let fixture: ComponentFixture<AderirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AderirComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AderirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
