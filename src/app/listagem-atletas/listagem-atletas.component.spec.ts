import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemAtletasComponent } from './listagem-atletas.component';

describe('ListagemAtletasComponent', () => {
  let component: ListagemAtletasComponent;
  let fixture: ComponentFixture<ListagemAtletasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListagemAtletasComponent]
    });
    fixture = TestBed.createComponent(ListagemAtletasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
