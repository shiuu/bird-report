import { Component, Input } from '@angular/core';
import { ISpecies } from '../shared/index';

@Component({
  selector: 'species-list',
  templateUrl: './species-list.component.html'
})
export class SpeciesListComponent {
  @Input() species:ISpecies[];
}