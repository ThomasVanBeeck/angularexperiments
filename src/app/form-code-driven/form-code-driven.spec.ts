import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCodeDriven } from './form-code-driven';

describe('FormCodeDriven', () => {
  let component: FormCodeDriven;
  let fixture: ComponentFixture<FormCodeDriven>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormCodeDriven]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormCodeDriven);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
