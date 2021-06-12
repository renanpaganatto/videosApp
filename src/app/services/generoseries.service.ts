import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { IListaGenero } from '../models/IGenero.model';

@Injectable({
  providedIn: 'root'
})
export class GeneroseriesService {
  lingua = 'pt-BR';
  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=7693bf3ef833ea05091c94eaa78844b1';

  constructor(private http: HttpClient,
    public toastController: ToastController) { }

    buscarGeneros(): Observable<IListaGenero>{
      const url = `${this.apiURL}genre/tv/list${this.key}&language=${this.lingua}`;
      return this.http.get<IListaGenero>(url).pipe(
        map((retorno) => retorno),
        catchError((erro) => this.exibirErro(erro))
      );
    }

    async exibirErro(erro) {
      const toast = await this.toastController.create({
        message: 'Erro ao consultar a API!',
        duration: 2000,
        color: 'danger',
        position: 'middle',
      });
      toast.present();
      return null;
    }
}
