import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-score',
  templateUrl: './view-score.component.html',
  styleUrls: ['./view-score.component.scss']
})
export class ViewScoreComponent implements OnInit{
  @Input() public atleta: any;

  constructor(private readonly modalService: NgbActiveModal){}

  public ngOnInit(): void {
    console.log(this.atleta)
  }

  public closeModal(){
    this.modalService.close();
  }

  public getNomeWod(wod: any) {
    let nome;
    if (wod === 3) {
      nome = 'Wod 3.1';
      return nome
    } if (wod === 4) {
      nome = 'Wod 3.2';
      return nome
    } if (wod === 5) {
      nome = 'Wod 3.3';
      return nome
    }
    nome = `Wod ${ wod }`;
    return nome;
  }

}
