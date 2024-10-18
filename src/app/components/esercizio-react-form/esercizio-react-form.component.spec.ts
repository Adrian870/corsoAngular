import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsercizioReactFormComponent } from './esercizio-react-form.component';

describe('EsercizioReactFormComponent', () => {
  let component: EsercizioReactFormComponent;
  let fixture: ComponentFixture<EsercizioReactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsercizioReactFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsercizioReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
