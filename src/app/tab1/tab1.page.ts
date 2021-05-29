import { IFilme } from './../models/IFilme.model';
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  titulo = 'Videos';

  listaFilmes: IFilme[] = [
    {
      nome: 'Rogai por Nós (2021)',
      lancamento: '02/04/2021 (US)',
      duracao: '1h 39m',
      classificacao: 73,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zduyzcjyahZtP4fGZE6789h04IM.jpg',
      generos: ['Terror']
    },
    {
      nome: 'Mortal Kombat (2021)',
      lancamento: '15/04/2021 (BR)',
      duracao: '1h 50m',
      classificacao: 71,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ijvC2w2yANsfgLT3LMu2zFr0fxh.jpg',
      generos: ['Ação', 'Fantasia', 'Aventura']
    },
    {
      nome: 'Godzilla vs. Kong (2021)',
      lancamento: '01/04/2021 (BR)',
      duracao: '1h 53m',
      classificacao: 81,
      cartaz:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wllzjZxg4ynlAm5xmOICJ2uHOPJ.jpg",
      generos: ['Ação', 'Ficção científica']
    },
    {
      nome: 'Aqueles Que Me Desejam a Morte (2021)',
      lancamento: '14/05/2021 (US)',
      duracao: '1h 40m',
      classificacao: 71,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qNi8uFKHAN5qt9UU5PpDi8cjWj1.jpg',
      generos: ['Thriller', 'Drama', 'Ação', 'Mistério'],
    },
    {
      nome: 'Sem Remorso (2021)',
      lancamento: '30/04/2021 (BR)',
      duracao: '1h 50m',
      classificacao: 72,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uHEZ4ZMziIjlAgCTQAEh9ROvtj0.jpg',
      generos: ['Ação', 'Thriller', 'Guerra'],
    }
  ];

  constructor(
    public alertController: AlertController,
    public toastController: ToastController
  ) {}

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

  async apresentarToast() {
    const toast = await this.toastController.create({
      message: 'Filme adicionado aos favoritos.',
      duration: 2000,
      color: 'success',
    });
    toast.present();
  }
}
