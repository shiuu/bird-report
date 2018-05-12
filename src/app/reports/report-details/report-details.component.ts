import { Component } from '@angular/core'
import { ReportService } from '../shared/report.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  templateUrl: './report-details.component.html',
  styles: [`
    .container { padding-left:20px; padding-right:20px; }
  `]
})
export class ReportDetailsComponent {
  report:any
  
  constructor(private reportService:ReportService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.report = this.reportService.getReport(+this.route.snapshot.params['id'])
  }

}