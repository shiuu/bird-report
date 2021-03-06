import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../shared/report.service';
import { IReport, ISpecies, IBird } from '../shared/report.model';

@Component({
  templateUrl: './report-details.component.html',
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
  `]
})
export class ReportDetailsComponent implements OnInit {
  report: IReport;
  addMode: boolean;
  filter = 'all';
  sortBy = 'name';

  constructor(private reportService: ReportService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // this.report = this.reportService.getReport(+this.route.snapshot.params['id']);
    this.route.data.forEach((data) => {
      this.report = data['report'];
    });
  }

  addSpecies() {
    this.addMode = true;
  }

  saveNewSpecies(species: ISpecies) {
    const bird: IBird = this.reportService.getBirdInfoFromName(species.name);
    if (bird) {
      species.id = bird.id; // this.reportService.getBirdId(species.name);
      species['uncommon'] = bird.uncommon;
    }
    this.report.species.push(species);
    this.reportService.saveReport(this.report).subscribe();
    this.addMode = false;
  }

  cancelAddSpecies() {
    this.addMode = false;
  }
}
