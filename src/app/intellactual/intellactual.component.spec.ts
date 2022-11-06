import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntellactualComponent } from './intellactual.component';

describe('IntellactualComponent', () => {
  let component: IntellactualComponent;
  let fixture: ComponentFixture<IntellactualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntellactualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntellactualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
