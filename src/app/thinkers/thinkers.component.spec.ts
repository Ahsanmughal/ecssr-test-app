import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThinkersComponent } from './thinkers.component';

describe('ThinkersComponent', () => {
  let component: ThinkersComponent;
  let fixture: ComponentFixture<ThinkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThinkersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThinkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
