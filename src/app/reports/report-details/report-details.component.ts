import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReportService } from '../shared/report.service';
import { IReport } from '../shared/report.model';

@Component({
  templateUrl: './report-details.component.html',
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
  `]
})
export class ReportDetailsComponent {
  report:IReport;
  
  constructor(private reportService:ReportService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    // this.report = this.reportService.getReport(+this.route.snapshot.params['id']);
    this.route.data.forEach((data) => {
      this.report = data['report'];
    })
  }
}