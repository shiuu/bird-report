export interface IReport {
  id: number;
  date: Date;
  location?: {
    place: string;
    state: string;
  };
  species: ISpecies[]; 
}

export interface ISpecies {
  //id: number;
  name: string;
  //scientificName: string;
  //uncommon: boolean;
  //imageUrl: string;
  count: number;
  comments: string;
}  