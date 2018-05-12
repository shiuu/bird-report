import { Component, OnInit } from '@angular/core';
import { ReportService } from './shared/report.service';
import { IReport } from './shared/report.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: `
  <div>
    <h1>Bird Report</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let report of reports" class="col-md-5">
        <report-thumbnail [report]="report"></report-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class ReportListComponent implements OnInit {
  reports: IReport[]; // any[];

  constructor(private reportService: ReportService, private route:ActivatedRoute){ }

  ngOnInit(){
    // this.reports = this.reportService.getReports();
    this.reports = this.route.snapshot.data['reports'];
  }
}