import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCashComponent } from './register-cash.component';

describe('RegisterCashComponent', () => {
  let component: RegisterCashComponent;
  let fixture: ComponentFixture<RegisterCashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterCashComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterCashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
