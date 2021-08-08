import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddReactiveFormComponent } from './product-add-reactive-form.component';

describe('ProductAddReactiveFormComponent', () => {
  let component: ProductAddReactiveFormComponent;
  let fixture: ComponentFixture<ProductAddReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductAddReactiveFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductAddReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
