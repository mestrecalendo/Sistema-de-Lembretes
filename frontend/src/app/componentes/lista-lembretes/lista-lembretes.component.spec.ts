import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaLembretesComponent } from './lista-lembretes.component';

describe('ListaLembretesComponent', () => {
  let component: ListaLembretesComponent;
  let fixture: ComponentFixture<ListaLembretesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaLembretesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaLembretesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
