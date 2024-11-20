import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../servicios/peliculas.service';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  title:string= "HomePage"
  constructor(
    private readonly peliculasService:PeliculasService
  ) { }

  ngOnInit(): void {
    this.peliculasService.obtenerComedias().subscribe({
      next:()=>{
        console.log('peliculas obtenidas con exito')
      },
      error(err) {
        console.error(err)
      },
    })
  }

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
