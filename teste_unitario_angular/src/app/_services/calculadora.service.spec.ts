import { TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
    service = TestBed.inject(CalculadoraService);
  });

  // it('should be created', () => {
  // expect(service).toBeTruthy();
  // });

  it('Deve somar dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(5, 8, 'soma');
    expect(result).toBe(13, 'O resultado deve ser igual a 13');
  })

  it('Deve subtrair dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(5, 8, 'subtrair');
    expect(result).toBe(-3, 'O resultado deve ser igual a -3');
 })

 it('Deve multiplicar dois números', () => {
    expect(service).toBeTruthy();
    const result = service.calcular(5, 8, 'multiplicar');
    expect(result).toBe(40, 'O resultado deve ser igual a 40');
  })
});
