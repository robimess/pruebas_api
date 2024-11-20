import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePage } from './home.page';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deberia sumar 2 numeros', () => {
    expect(component.sumar(1, 1)).toBe(2);
  })
  it('deberia mostrar error por ingreso de numeros negativos', () => {
    expect(() => component.sumar(1, -1)).toThrowError('Error: solo numero positivos');
  })
  it('deberia restar 2 numeros', () => {
    expect(component.restar(1, 1)).toBe(0);
  })
  it('deberia multiplicar 2 numeros', () => {
    expect(component.multiplicar(1, 1)).toBe(1);
  })
  it('deberia dividir 2 numeros', () => {
    expect(component.dividir(1, 1)).toBe(1);
  })
  it('deberia mostrar error de divison por cero', () => {
    expect(() => component.dividir(1, 0)).toThrowError('Error: division por cero')
  })
  it('deberia coincidir el titulo de HomePage',()=>{
    expect(component.title).toBe('HomePage')
  })
});
