import { Component, OnInit } from '@angular/core';
import { LembretesService } from 'src/app/services/lembretes.service';

@Component({
  selector: 'app-lista-lembretes',
  templateUrl: './lista-lembretes.component.html',
  styleUrls: ['./lista-lembretes.component.scss']
})

export class ListaLembretesComponent implements OnInit {
  listaLembretes?: any[]

  constructor(private lembretesService: LembretesService) { }

  ngOnInit() {
    this.lembretesService.ListarLembretes().subscribe({
      next: (data) => {
        this.listaLembretes = data;
      },
      error: (error: any) => { }
    });

  }

  excluirLembrete(id: number) {
    this.lembretesService.ExcluirLembrete(id).subscribe({
      next: () => {
        this.ngOnInit();
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }
}
