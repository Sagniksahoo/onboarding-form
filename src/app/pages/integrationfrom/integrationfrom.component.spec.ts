import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationfromComponent } from './integrationfrom.component';

describe('IntegrationfromComponent', () => {
  let component: IntegrationfromComponent;
  let fixture: ComponentFixture<IntegrationfromComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntegrationfromComponent]
    });
    fixture = TestBed.createComponent(IntegrationfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
