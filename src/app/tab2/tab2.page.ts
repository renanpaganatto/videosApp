import { IGenero } from './../models/IGenero.model';
import { GeneroseriesService } from './../services/generoseries.service';
import { IListaSeries, ISeriesApi } from './../models/ISeriesAPI.model';
import { SeriesService } from './../services/series.service';
import { DadosService } from './../services/dados.service';
import { ISeries } from './../models/ISeries.model';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit{
  titulo: string = 'Séries';

  listaSeries: ISeries[] = [
    {
      nome: ' Loki (2021) ',
      duracao: '52m',
      classificacao: 82,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ukR0MkCQE6IylzBPd61txJi1L3E.jpg',
      generos: ['Action & Adventure', 'Sci-Fi & Fantasy'],
      pagina: '/loki',
    },
    {
      nome: ' Lúcifer (2016) ',
      duracao: '45m',
      classificacao: 85,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hdKxcoV5CFc3sGOmbGXDXbx1cTZ.jpg',
      generos: ['Crime', 'Sci-Fi & Fantasy'],
      pagina: '/lucifer',
    },
    {
      nome: ' The Flash (2014) ',
      duracao: '44m',
      classificacao: 77,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg',
      generos: ['Drama', 'Sci-Fi & Fantasy'],
      pagina: '/theflash',
    },
    {
      nome: ' Ragnarok (2020) ',
      duracao: '45m',
      classificacao: 80,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1LRLLWGvs5sZdTzuMqLEahb88Pc.jpg',
      generos: ['Drama', 'Sci-Fi & Fantasy', 'Mistério'],
      pagina: '/ragnarok',
    },
    {
      nome: ' Falcão e o Soldado Invernal (2021) ',
      duracao: '50m',
      classificacao: 78,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oF9njYCN6lBdrsi6wfulcxTggvn.jpg',
      generos: [
        'Sci-Fi & Fantasy',
        'Action & Adventure',
        'Drama',
        'War & Politics',
      ],
      pagina: '/falcaosoldado',
    },
  ];

  listaBuscaSerie: IListaSeries;
  generoseries: string[] = [];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController,
    public dadosService: DadosService,
    public seriesService: SeriesService,
    public generoseriesService: GeneroseriesService,
    public route: Router
  ) {}

  buscarSeries(evento: any) {
    console.log(evento.target.value);
    const busca = evento.target.value;
    if (busca && busca.trim() != '') {
      this.seriesService.buscarSeries(busca).subscribe((dados) => {
        console.log(dados);
        this.listaBuscaSerie = dados;
      });
    }
  }

  exibirSeries(series: ISeriesApi) {
    this.dadosService.guardarDados('series', series);
    this.route.navigateByUrl('/dados-series');
  }

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }

  async exibirAlertaFavorito() {
    const alert = await this.alertController.create({
      header: 'Alerta!',
      message: 'Deseja realmente favoritar o filme?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          },
        },
        {
          text: 'Sim, favoritar!',
          handler: () => {
            this.apresentarToast();
          },
        },
      ],
    });

    await alert.present();
  }

  ngOnInit(){
    this.generoseriesService.buscarGeneros().subscribe(dados=>{
      console.log('Generos: ', dados.genres);
      dados.genres.forEach(genero=> {
        this.generoseries[genero.id] = genero.name;
      });
      this.dadosService.guardarDados('generos', this.generoseries);
    });
  }
}
