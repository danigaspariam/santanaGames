import { Component, OnInit } from '@angular/core';
import { ListagemService } from '../services/listagem.service';
import { ListagemAtletasResourse } from '../model/listagem.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  public atletas: ListagemAtletasResourse[] = [];
  public form: FormGroup;

  constructor(private readonly service: ListagemService, private fb: FormBuilder){
    this.form = this.fb.group({
      nome: [''],
      notaWod1: [''],
      notaWod2: [''],
      notaWod3: [''],
      notaWod4: [''],
      notaWod5: [''],
      descricao1: [''],
      descricao2: [''],
      descricao3: [''],
      descricao4: [''],
      descricao5: [''],
    });
  }



  public ngOnInit(){
    this.service.getAllAtletes().subscribe((data: ListagemAtletasResourse[]) =>{

      this.atletas = data});
  }



}
