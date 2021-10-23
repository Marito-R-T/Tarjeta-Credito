import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";

import { Tarjeta } from '../../models/tarjeta.model'

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  public url: string

  constructor(
    public _http: HttpClient,
  ) {
    this.url = 'http://localhost:3000/api/'
  }

  listarTarjetas(): Observable<any> {
    let a = this._http.get(this.url + `tarjeta`);
    return a;
  }
}
