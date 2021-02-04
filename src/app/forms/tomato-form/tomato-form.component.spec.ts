import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TomatoFormComponent } from './tomato-form.component';

describe('TomatoFormComponent', () => {
  let component: TomatoFormComponent;
  let fixture: ComponentFixture<TomatoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TomatoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TomatoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
