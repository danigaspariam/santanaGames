export class ListagemAtletasResourse {
  entrant?: EntrantModel;
  overallRank?: string;
  overallScore?: number;
  scores?: ScoreResource[];

}

export class EntrantModel{
  category?: string;
  competitorId?: number;
  competitorName?: string;
  firstName?: string;
  gender?: string;
}

export class ScoreResource{
  score?: any;
  wod?: number;
  descricao?: string;
}

