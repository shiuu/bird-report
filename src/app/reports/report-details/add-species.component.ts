import { Component, OnInit, AfterViewInit, Output, EventEmitter, ViewChildren, QueryList } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
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
export class AddSpeciesComponent implements OnInit, AfterViewInit {
  @Output() saveNewSpecies = new EventEmitter();
  @Output() cancelAddSpecies = new EventEmitter();
  @ViewChildren('nameInput') nameInputVia: QueryList<any>;

  newSpeciesForm: FormGroup;
  name: FormControl;
  count: FormControl;
  comments: FormControl;

  birdList: IBird[];

  constructor(private reportService: ReportService) {
  }

  ngOnInit() {
    this.birdList = this.reportService.getBirds();
    this.birdList.sort(sortByNameAsc);

    this.name = new FormControl('', [Validators.required, birdNameValidator(this.birdList)]);
    this.count = new FormControl('', Validators.required);
    this.comments = new FormControl('', [Validators.required, Validators.maxLength(400)]);

    this.newSpeciesForm = new FormGroup({
      name: this.name,
      count: this.count,
      comments: this.comments
    });
  }

  ngAfterViewInit() {
    this.nameInputVia.first.nativeElement.focus();
  }

  saveSpecies(formValues) {
    const species: ISpecies = {
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

/** A bird's name has to from the list */
function birdNameValidator(birds: IBird[]): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const bird: IBird = birds.find(b => b.name === control.value);
    return bird === undefined ? {'invalidBirdName': {value: control.value}} : null;
  };
}
