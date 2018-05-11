import { Component } from '@angular/core'

@Component({
  selector: 'report-list',
  template: `
  <div>
    <h1>Bird Report</h1>
    <hr/>
    <report-thumbnail [report]="report1"></report-thumbnail>
  </div>
  `
})
export class ReportListComponent {
  report1 = {
    id: 1,
    date: '3/26/2018',
    location: 'Royal National Park'
  }
}