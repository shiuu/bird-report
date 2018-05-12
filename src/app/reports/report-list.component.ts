import { Component, OnInit } from '@angular/core';
import { ReportService } from './shared/report.service';

@Component({
  selector: 'report-list',
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
  reports: any[];

  constructor(private reportService: ReportService){ }

  ngOnInit(){
    this.reports = this.reportService.getReports();
  }
}