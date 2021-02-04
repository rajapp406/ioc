import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MashroomFormComponent } from './mashroom-form.component';

describe('MashroomFormComponent', () => {
  let component: MashroomFormComponent;
  let fixture: ComponentFixture<MashroomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MashroomFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MashroomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
