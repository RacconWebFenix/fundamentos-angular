import { Component } from '@angular/core';
import { Celular } from '../types/Celular';

@Component({
  selector: 'app-rederizando-listas',
  templateUrl: './rederizando-listas.component.html',
  styleUrls: ['./rederizando-listas.component.css'],
})
export class RederizandoListasComponent {
  celulares: Celular[] = [
    {
      id: 1,
      nome: 'Celular XL',
      descricao: 'Um celular Grande',
      esgotado: false,
    },
    {
      id: 2,
      nome: 'Celular Normal',
      esgotado: false,
    },
    {
      id: 3,
      nome: 'Celular Mini',
      descricao: 'Um celular pequeno',
      esgotado: true,
    },
  ];
}
