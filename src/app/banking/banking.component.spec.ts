import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankingComponent } from './banking.component';

describe('BankingComponent', () => {
  let component: BankingComponent;
  let fixture: ComponentFixture<BankingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankingComponent);
    component = fixture.componentInstance;

    //fixture.detectChanges para detectar mudanças mais utilizado para mudança no frontend
    fixture.detectChanges();
  });

  //Componente deve ser criado
  it('should create', () => {
    //verificar se é verdadeiro q o componente foi criado
    expect(component).toBeTruthy();
  });

  it('(U) GetPoupança: Deve ter na poupança de 10 default', 
   () => {
    expect(component.getPoupanca).toEqual(10);
  });

  it('(U) GetCateira: Deve ter na carteira de 50 default', 
   () => {
    expect(component.getCarteira).toEqual(50);
  });

  it('(U) setSacar: Deve Sacar 10 da poupança', 
   () => {
    expect(component.setSacar('10')).toEqual(60); 
    //equal verifica que tem q ter 60 na carteira
  });
  
  it('(U) setSacar: Sacar deve ser string(isNaN) ou valor para sacar maior que quantidade na poupança', 
  () => {
   expect(component.setSacar('string')).not.toBeTruthy();
  });

  it('(U) setDepositar: Deve depositar 20 da poupança', 
  () => {
   expect(component.setDepositar('20')).toEqual(30); 
   //equal verifica que tem q ter 60 na carteira
  });


  ///U teste unitario
  it('(U) setDepositar: Deve ser string(isNaN) ou valor para depositar maior que quantidade na carteira', 
  () => {
    //deve ser string retornando falso de que não é verdadeiro
   expect(component.setDepositar('string')).not.toBeTruthy();
  });


  // abrir index.html de dentro do coverage para acessar o coverage e verificar quais linhas
  // no fonte/arquivo foi realizado cobertura. 

  //teste interface front
  it('(I) setDepositar: Deve transferir da carteira para poupanca', () =>{
    let el = fixture.debugElement.nativeElement;

    ///adiciona valor ao id input q tem o valor
    //chama a ação de click no botão
    el.querySelector('#input-depositar').value = '10';
    el.querySelector('#depositar').click();

    //(I) testando interface mudanças 
    fixture.detectChanges();
    expect(el.querySelector('#get-poupanca').textContent).toEqual('20');

    ///espera q o valor da poupança seja tal, e da carteira fique tal valor
    ///expect(component.getPoupanca).toEqual(20);
    expect(component.getCarteira).toEqual(40);


   
  });

});
