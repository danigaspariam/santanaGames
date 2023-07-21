import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

}
