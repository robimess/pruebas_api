import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  title:string= "HomePage"
  constructor() { }

  sumar(a: number, b: number): number {
    if (a < 0 || b < 0) {
      throw new Error('Error: solo numero positivos')
    }
    return a + b
  }
  restar(a:number,b:number):number{
    return a - b
  }
  multiplicar(a:number,b:number):number{
    return a * b
  }
  dividir(a:number,b:number):number{
    if (b==0) {
      throw new Error('Error: division por cero')
    }
    return a / b
  }

}
