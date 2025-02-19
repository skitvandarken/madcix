import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembrosmadcixComponent } from './membrosmadcix.component';

describe('MembrosmadcixComponent', () => {
  let component: MembrosmadcixComponent;
  let fixture: ComponentFixture<MembrosmadcixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembrosmadcixComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembrosmadcixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
