import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnionsFormComponent } from './onions-form.component';

describe('OnionsFormComponent', () => {
  let component: OnionsFormComponent;
  let fixture: ComponentFixture<OnionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnionsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
