import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SommatoreComponent } from './sommatore.component';

describe('SommatoreComponent', () => {
  let component: SommatoreComponent;
  let fixture: ComponentFixture<SommatoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SommatoreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SommatoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
