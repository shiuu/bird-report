import { Component, Input } from '@angular/core'

@Component({
  selector: 'report-thumbnail',
  template: `
    <div [routerLink]="['/reports', report.id]" class="well hoverwell thumbnail">
      <h2>{{report.location.place}}, {{report.location.state}}</h2>
      <div>Date: {{report.date}}</div>
      <div>Species: {{report.species.length}}</div>
    </div>
  `,
  styles: [`
    .well div { color: #bbb; }
    .thumbnail { min-height: 190px; }
  `]
})
export class ReportThumbnailComponent {
  @Input() report:any

}