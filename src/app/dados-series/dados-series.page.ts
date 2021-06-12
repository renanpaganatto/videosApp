import { ISeriesApi } from './../models/ISeriesAPI.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-series',
  templateUrl: './dados-series.page.html',
  styleUrls: ['./dados-series.page.scss'],
})
export class DadosSeriesPage implements OnInit {
  series: ISeriesApi;
  generos: string[] = [];

  constructor(public dadosService: DadosService) {}

  ngOnInit() {
    this.series = this.dadosService.pegarDados('series');
    this.generos = this.dadosService.pegarDados('generos');
    console.log('Serie Enviada', this.series);
  }
}
