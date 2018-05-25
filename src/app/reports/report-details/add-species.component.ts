import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISpecies, IBird, ReportService } from '../shared/index';
import { sortByNameAsc } from './species-list.component';

@Component({
  selector: 'add-species',
  templateUrl: './add-species.component.html',
  styles: [`
    em {float:right; color:#E05C65; padding-left:10px;}
    .error input, .error textarea {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class AddSpeciesComponent implements OnInit {
  @Output() saveNewSpecies = new EventEmitter();
  @Output() cancelAddSpecies = new EventEmitter();

  newSpeciesForm: FormGroup;
  name: FormControl;
  count: FormControl;
  comments: FormControl;

  birdList: IBird[];

  constructor(private reportService:ReportService) {
  }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.count = new FormControl('', Validators.required);
    this.comments = new FormControl('', [Validators.required, Validators.maxLength(400)]);

    this.newSpeciesForm = new FormGroup({
      name: this.name,
      count: this.count,
      comments: this.comments
    });

    this.birdList = this.reportService.getBirds();
    this.birdList.sort(sortByNameAsc);
  }

  saveSpecies(formValues) {
    let species:ISpecies = {
      id: undefined,
      name: formValues.name,
      count: +formValues.count,
      comments: formValues.comments
    };
    this.saveNewSpecies.emit(species);
  }

  cancel() {
    this.cancelAddSpecies.emit();
  }
}