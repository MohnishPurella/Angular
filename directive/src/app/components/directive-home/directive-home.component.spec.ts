import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveHomeComponent } from './directive-home.component';

describe('DirectiveHomeComponent', () => {
  let component: DirectiveHomeComponent;
  let fixture: ComponentFixture<DirectiveHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
