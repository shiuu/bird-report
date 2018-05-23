import { Component, Input, OnChanges } from '@angular/core';
import { ISpecies } from '../shared/index';

@Component({
  selector: 'species-list',
  templateUrl: './species-list.component.html'
})
export class SpeciesListComponent implements OnChanges{
  @Input() species:ISpecies[];
  @Input() filter:string;
  @Input() sortBy:string;
  visibleSpecies:ISpecies[];

  ngOnChanges(filter) {
    if(this.species) {
      this.filterSpecies(this.filter);
      this.sortBy === 'name' ? this.visibleSpecies.sort(sortByNameAsc) : this.visibleSpecies.sort(sortByTaxonomy);
    }
  }

  filterSpecies(filter) {
    if(filter === 'all') {
      this.visibleSpecies = this.species.slice(0);
    } else {
      this.visibleSpecies = this.species.filter(species => {
        return species.uncommon === (filter === 'uncommon');
      })
    }
  }
}

function sortByNameAsc(s1: ISpecies, s2: ISpecies) {
  if(s1.name > s2.name) return 1;
  else if(s1.name === s2.name) return 0;
  else return -1;
}

function sortByTaxonomy(s1: ISpecies, s2: ISpecies) {
  return s1.id - s2.id;
}