import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModule } from 'src/app/app.module';

import { AdminProductItemComponent } from './admin-product-item.component';

describe('AdminProductItemComponent', () => {
  let component: AdminProductItemComponent;
  let fixture: ComponentFixture<AdminProductItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminProductItemComponent],
      imports: [AppModule]
    }).compileComponents();

    fixture = TestBed.createComponent(AdminProductItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
