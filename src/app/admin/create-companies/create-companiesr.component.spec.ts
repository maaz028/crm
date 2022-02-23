import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompaniesrComponent } from './create-companiesr.component';

describe('CreateCompaniesrComponent', () => {
  let component: CreateCompaniesrComponent;
  let fixture: ComponentFixture<CreateCompaniesrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCompaniesrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompaniesrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
