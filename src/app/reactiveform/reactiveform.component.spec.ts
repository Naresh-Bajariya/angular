import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeformComponent } from './reactiveform.component';

describe('RelativeformComponent', () => {
  let component: RelativeformComponent;
  let fixture: ComponentFixture<RelativeformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelativeformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelativeformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
