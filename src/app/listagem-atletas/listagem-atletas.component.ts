import { Component, OnInit } from '@angular/core';
import { ListagemService } from '../services/listagem.service';
import { ListagemAtletasResourse, ScoreResource } from '../model/listagem.model';

@Component({
  selector: 'app-listagem-atletas',
  templateUrl: './listagem-atletas.component.html',
  styleUrls: ['./listagem-atletas.component.scss']
})
export class ListagemAtletasComponent implements OnInit{
  public atletas: [] = [];
  public wod1: number = 0;
  public wod2: number = 0;
  public wod3: number = 0;
  public wod4: number = 0;
  public wod5: number = 0;
  public isFeminino = true;
  public isMasculino = false;

  ///// categorias masculino
  public basicMasculino: ListagemAtletasResourse[] = [];
  public inicianteMasculino: ListagemAtletasResourse[] = [];
  public scaleMasculino: ListagemAtletasResourse[] = [];
  public rxMasculino: ListagemAtletasResourse[] = [];

  ///// categorias feminino
  public basicFeminino!: ListagemAtletasResourse[];
  public inicianteFeminino: ListagemAtletasResourse[] = [];
  public scaleFeminino: ListagemAtletasResourse[] = [];
  public rxFeminino: ListagemAtletasResourse[] = [];

  constructor(private readonly service: ListagemService){}
  public ngOnInit(){
    this.isFeminino
   this.service.getAllAtletes().subscribe(data => {
    this.filtrarArrays(data);
   });
  }

  public filtrarArrays(data: ListagemAtletasResourse[]){
    const atletasBasic = data.filter(item => item.entrant?.category === 'basic');
    const atletasIniciante = data.filter(item => item.entrant?.category === 'in');
    const atletasScale = data.filter(item => item.entrant?.category === 'sc');
    const atletasRx = data.filter(item => item.entrant?.category === 'rx');
    this.basicFeminino = (atletasBasic.filter(item => item.entrant?.gender === 'F')).sort((a,b) =>  (a.overallScore ?? 0) - (b.overallScore ?? 0));
    this.inicianteFeminino = atletasIniciante.filter(item => item.entrant?.gender === 'F').sort((a,b) =>  (a.overallScore ?? 0) - (b.overallScore ?? 0));
    this.scaleFeminino = atletasScale.filter(item => item.entrant?.gender === 'F').sort((a,b) =>  (a.overallScore ?? 0) - (b.overallScore ?? 0));
    this.rxFeminino = atletasRx.filter(item => item.entrant?.gender === 'F').sort((a,b) =>  (a.overallScore ?? 0) - (b.overallScore ?? 0));
    this.basicMasculino = atletasBasic.filter(item => item.entrant?.gender === 'M').sort((a,b) =>  (a.overallScore ?? 0) - (b.overallScore ?? 0));
    this.scaleMasculino = atletasScale.filter(item => item.entrant?.gender === 'M').sort((a,b) =>  (a.overallScore ?? 0) - (b.overallScore ?? 0));
    this.rxMasculino = atletasRx.filter(item => item.entrant?.gender === 'M').sort((a,b) =>  (a.overallScore ?? 0) - (b.overallScore ?? 0));
    this.inicianteMasculino = atletasIniciante.filter(item => item.entrant?.gender === 'M').sort((a,b) =>  (a.overallScore ?? 0) - (b.overallScore ?? 0));

  }

  public btnFeminino(){
    return this.isFeminino = true, this.isMasculino = false;
  }

  public btnMasculino(){
    return this.isFeminino = false, this.isMasculino = true;
  }

  public getNotaWod1(atleta: ListagemAtletasResourse){
    const arrayScore: ScoreResource[] | undefined = atleta.scores;
    arrayScore?.map(data => {
      if(data.wod === 1){
        this.wod1 = data.score;
      }
    });
    return this.wod1;
  }

  public getNotaWod2(atleta: ListagemAtletasResourse){
    const arrayScore: ScoreResource[] | undefined = atleta.scores;
    arrayScore?.map(data => {
      if(data.wod === 2){
        this.wod2 = data.score;
      }
    });
    return this.wod2;
  }

  public getNotaWod3(atleta: ListagemAtletasResourse){
    const arrayScore: ScoreResource[] | undefined = atleta.scores;
    arrayScore?.map(data => {
      if(data.wod === 3){
        this.wod3 = data.score;
      }
    });
    return this.wod3;
  }
  public getNotaWod4(atleta: ListagemAtletasResourse){
    const arrayScore: ScoreResource[] | undefined = atleta.scores;
    arrayScore?.map(data => {
      if(data.wod === 4){
        this.wod4 = data.score;
      }
    });
    return this.wod4;
  }
  public getNotaWod5(atleta: ListagemAtletasResourse){
    const arrayScore: ScoreResource[] | undefined = atleta.scores;
    arrayScore?.map(data => {
      if(data.wod === 5){
        this.wod5 = data.score;
      }
    });
    return this.wod5;
  }

}
