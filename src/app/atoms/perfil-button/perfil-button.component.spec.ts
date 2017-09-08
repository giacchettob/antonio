import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilButtonComponent } from './perfil-button.component';

describe('PerfilButtonComponent', () => {
  let component: PerfilButtonComponent;
  let fixture: ComponentFixture<PerfilButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
