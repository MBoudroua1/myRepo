import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienEtreSpaComponent } from './bien-etre-spa.component';

describe('BienEtreSpaComponent', () => {
  let component: BienEtreSpaComponent;
  let fixture: ComponentFixture<BienEtreSpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienEtreSpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienEtreSpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
