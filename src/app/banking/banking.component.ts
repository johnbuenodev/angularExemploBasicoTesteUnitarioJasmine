import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {

  private poupanca: number = 10;
  private carteira: number = 50;

  get getPoupanca(): number{

    return this.poupanca;
  }

  get getCarteira(): number{
   
   return this.carteira;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public setSacar(value: string): Number | undefined{
    const sacar = Number(value);

    if(isNaN(sacar) || this.poupanca < sacar){
     return;
    }
     
    this.poupanca -= sacar;
    console.log(sacar); 
    return this.carteira += sacar;
  }

  public setDepositar(value: string): Number | undefined{
    const depositar = Number(value);
    //verifica com isNaN se é string se for não converte
    if(isNaN(depositar) || this.carteira < depositar){
      return;
    }
    this.carteira -= depositar;
    console.log(depositar); 
    return this.poupanca +=depositar;
  }

}
