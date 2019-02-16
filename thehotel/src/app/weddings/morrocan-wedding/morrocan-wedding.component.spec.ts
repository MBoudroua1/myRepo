import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorrocanWeddingComponent } from './morrocan-wedding.component';

describe('MorrocanWeddingComponent', () => {
  let component: MorrocanWeddingComponent;
  let fixture: ComponentFixture<MorrocanWeddingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorrocanWeddingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorrocanWeddingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
