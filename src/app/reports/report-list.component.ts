import { Component } from '@angular/core'

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
export class ReportListComponent {
  reports = [
    {
      id: 1,
      date: '3/31/2018',
      location: { 
        place: 'Capertee Valley',
        state: 'NSW'
      }
    },
    {
      id: 2,
      date: '3/24/2018',
      location: {
        place: 'Royal National Park',
        state: 'NSW'
      }
    },
    {
      id: 3,
      date: '3/17/2018',
      location: {
        place: 'Centennial Park, Sydney',
        state: 'NSW'
      }
    },
    {
      id: 4,
      date: '3/3/2018',
      location: {
        place: 'Deniliquin',
        state: 'NSW'
      }
    },
    {
      id: 5,
      date: '2/18/2018',
      location: {
        place: 'Pine Island Reserve',
        state: 'ACT'
      }
    },
  ]
}