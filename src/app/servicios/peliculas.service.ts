import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  url:string="https://api.sampleapis.com/movies";
  constructor(
    private readonly http:HttpClient
  ) { }
  obtenerComedias(){
    return this.http.get(this.url+'/comedy')
  }
}
