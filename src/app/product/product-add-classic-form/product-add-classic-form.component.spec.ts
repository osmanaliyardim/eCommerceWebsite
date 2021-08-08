import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddClassicFormComponent } from './product-add-classic-form.component';

describe('ProductAddClassicFormComponent', () => {
  let component: ProductAddClassicFormComponent;
  let fixture: ComponentFixture<ProductAddClassicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddClassicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddClassicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
