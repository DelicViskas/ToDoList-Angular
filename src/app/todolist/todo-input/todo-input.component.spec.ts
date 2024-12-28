import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartinputComponent } from './todo-input.component';

describe('SmartinputComponent', () => {
  let component: SmartinputComponent;
  let fixture: ComponentFixture<SmartinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmartinputComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SmartinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
