export interface IReport {
  id: number;
  date: Date;
  location?: {
    place: string;
    state: string;
  };
  notes: string;
  species: ISpecies[]; 
}

// Bird species info
export interface IBird {
  id: number;
  name: string;
  otherNames?: string[];
  scientificName?: string;
  uncommon?: boolean;
}

// The species info in reports
export interface ISpecies extends IBird {
  //imageUrl: string;
  count: number;
  comments: string;
}