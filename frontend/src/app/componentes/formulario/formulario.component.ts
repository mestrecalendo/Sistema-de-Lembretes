import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Lembrete } from '../../models/novo-lembrete';
import { LembretesService } from '../../services/lembretes.service';
import { ListaLembretesComponent } from '../lista-lembretes/lista-lembretes.component';
import { validatorData } from './validatorData';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  LembreteForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private lembretesService: LembretesService) { }
  ngOnInit(): void {
    this.LembreteForm = this.formBuilder.group({
      nome: ['', [Validators.required]],
      data: ['', [Validators.required, validatorData]],
      cor: ['#61E4C5', [Validators.required]],
    })
  }

  cadastrar() {
    if (!this.LembreteForm.valid) {
      return
    }
    const novoLembrete = this.LembreteForm.getRawValue() as Lembrete;

    this.lembretesService.cadastrarNovoLembrete(novoLembrete).subscribe({
      complete: () => {
        location.reload()
      },
      error: (e: any) => {
        alert(JSON.stringify(e))
      }
    }
    )
  }

}
