import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcdeComponent } from './abcde.component';

describe('AbcdeComponent', () => {
  let component: AbcdeComponent;
  let fixture: ComponentFixture<AbcdeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbcdeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbcdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
