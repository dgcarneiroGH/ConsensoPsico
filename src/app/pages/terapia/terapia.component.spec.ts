import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerapiaComponent } from './terapia.component';

describe('TerapiaComponent', () => {
  let component: TerapiaComponent;
  let fixture: ComponentFixture<TerapiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerapiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerapiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
