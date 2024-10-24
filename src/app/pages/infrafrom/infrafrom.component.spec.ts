import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfrafromComponent } from './infrafrom.component';

describe('InfrafromComponent', () => {
  let component: InfrafromComponent;
  let fixture: ComponentFixture<InfrafromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InfrafromComponent]
    });
    fixture = TestBed.createComponent(InfrafromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
