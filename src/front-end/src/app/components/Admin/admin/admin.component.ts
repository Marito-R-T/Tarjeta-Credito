import { Component, OnInit } from '@angular/core';
import { TarjetaService } from '../../../services/tarjeta/tarjeta.service'
import { Tarjeta } from '../../../models/tarjeta.model'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  dataSource: Tarjeta[]

  constructor(
    private tarjetaService: TarjetaService,
  ) {
  }

  ngOnInit(): void {
    this.tarjetaService.listarTarjetas().subscribe(response => {
      console.log(response)
      this.dataSource = response.tarjeta
    })
  }

}
