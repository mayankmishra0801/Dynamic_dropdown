import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JasComponent } from './jas.component';

describe('JasComponent', () => {
  let component: JasComponent;
  let fixture: ComponentFixture<JasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
